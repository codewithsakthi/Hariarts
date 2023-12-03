import { Component, HostListener ,ChangeDetectorRef, NgZone} from '@angular/core';
import { OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { AuthService } from '../../auth.service';
import { Observable, forkJoin, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Calendar } from 'primeng/calendar';
import { ImageModule } from 'primeng/image';
import { SortEvent } from 'primeng/api';
import { Router } from '@angular/router';

import KeenSlider, { KeenSliderInstance,KeenSliderPlugin } from "keen-slider"
const animation = { duration: 30000, easing: (t: any) => t }
interface Image {
  id: string;
  mimeType: string;
  name: string;
}
interface Data {
  id: string;
  mimeType: string;
  name: string;
}

@Component({
  selector: 'app-balagi',
  templateUrl: './balagi.component.html',
  styleUrls: ['./balagi.component.css',
      '../../../../node_modules/keen-slider/keen-slider.min.css'
],
  animations:[
    trigger('animation',[
      transition('void=>visible',[
      style({transform:'scale(0.5)'}),
      animate('150ms',style({transform:'scale(1)'}) )
    ]),
  ]),
  trigger('animation',[
    transition('visible=>void',[
    style({transform:'scale(1)'}),
    animate('150ms',style({transform:'scale(0.5)'}) )
  ]),
]),
  trigger('animation2', [ 
    transition(':leave',[
    style({opacity: 1}),
    animate('50ms', style({opacity: 0.8}))
    ])
]),
]
})
export class BalagiComponent {
 slider: KeenSliderInstance | null = null;
  @ViewChild('sliderRef') sliderRef!: ElementRef;
  slider1: KeenSliderInstance | null = null;
  @ViewChild('sliderRef1') sliderRef1!: ElementRef;
  currentYear = new Date().getFullYear();
  festival: any[] = [];
  yearsfolder: any[] = [];
  panelOpenState = false;
  images: any[] = [];
  selectedYear: string = ""; // Default selected year
  hide: boolean = false;
  sortField: string = 'month'; // Initial sort field
  sortOrder: number = 1; // 1 for ascending, -1 for descending
  screenshotDetected: boolean = false;
  years: any;
  activeButtonIndex: number | null = null;
  date!: Date;
  previewImage = false;
  showMask = false;
  currentLightboxImage: { tag: string; id: string } = { tag: "", id: "" };
  currentIndex = 0;
  controls = true;
  showCount = false;
  totalImageCount = 0;
  activeButton: number = -1;
  thumbnail: string = "";
  title: string = "";
  ylink: string = "";
  folders: any[] = [];
  h1: string = "";
  d1: string = "";
  h2: string = "";
  d2: string = "";
  Banner:Data[] = []
  Banner1:Data[] = []

  gallery:boolean=false

  selectedFolderImages: any[] = [];
  sortedFolderImages: any[] = [];
  selectedFolderName = "";
  selectedFolder: any = null;
  private touchstartX: number | null = null;
  imageLoaded: boolean = false;
  folderId: string = "";
  yearselcted: boolean = false;
  data: Data[] = [];
  yearchanged: boolean = false;
  btnhide: boolean = false;
  validyear=false;
  sortedFestivals:any[]=[]
  displayedColumns: string[] = ['festivalName', 'month']; // Add other column names as needed

  constructor(
    private googleDriveService: AuthService,
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private zone: NgZone,
    private router: Router
  ) {}


    getMonthName(month: number): string {
    // Convert month number to month name (customize as needed)
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month - 1];
  }
  ngAfterViewInit() {
    const isMobile = window.innerWidth <= 768; // You may adjust this threshold based on your design
    const perView = isMobile ? 2 : 4; // Change perView to 1 on mobile, otherwise 4    
    setTimeout(() => {
      if (this.sliderRef) {
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
          loop: true,
          mode: 'free-snap',
          slides: {
            perView: 1,
            spacing: 15,
          },
          created(s) {
            s.moveToIdx(5, true, animation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
        });
      }    
      if (this.sliderRef1) {
        this.slider1 = new KeenSlider(this.sliderRef1.nativeElement, {
          loop: true,
          mode: 'free-snap',
          slides: {
            perView: perView,
            spacing: 15,
          },
          created(s) {
            s.moveToIdx(5, true, animation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
          },
        });
      } 
    }, 2000); // Adjust the delay time as needed
  }
  ngOnDestroy() {
    if (this.slider)  this.slider.destroy()
  }


  navigateToAnotherComponent(folderId: string): void {
    // Navigate to another component with folderId as a query parameter
    this.router.navigate(['/Vlog'], {
      queryParams: { folderId: folderId }
    });
    
  }



  
  ngOnInit() {

    this.fetchBanner();
    this.defaultyear()

    this.totalImageCount = this.images.length;
    this.folderId = this.googleDriveService.folderId;
    this.googleDriveService.FestivalFolders().subscribe((festivals: any[]) => {
    this.festival = festivals;
    });
    this.googleDriveService.YearFolders('1_c_Kov4gGH6S1dWNu8k0g2huBQQ_Hg6r').subscribe((festivals: any[]) => {
      this.yearsfolder = festivals;
      console.log(this.yearsfolder)
      });
  }
  selectMonth(folder: any) {
    this.gallery=true

    const listFilesUrl = `https://www.googleapis.com/drive/v3/files?q='${this.folderId}' in parents&key=${this.googleDriveService.API_KEY}`;
    const fileUrl = `https://www.googleapis.com/drive/v3/files?q='${this.folderId}' in parents&key=${this.googleDriveService.API_KEY}`;
    this.googleDriveService.setFolderId(folder);
    console.log("folder set" + this.googleDriveService.folderId);
    this.yearselcted = true;
    this.yearchanged=true
    this.btnhide = true;
    this.fetchyears();
    this.fetchFoldersAndImages();
    this.getThumbnailUrl(this.folders);
    this.http
      .get(listFilesUrl, { responseType: "json" })
      .subscribe((response: any) => {
        const matchingFile = response.files.find(
          (file: any) => file.name === "h2.txt"
        );
        if (matchingFile) {
          const fileId = matchingFile.id;
          const fileUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${this.googleDriveService.API_KEY}`;

          this.http
            .get(fileUrl, { responseType: "text" })
            .subscribe((data: any) => {
              this.h2 = data;
            });
        } else {
          console.log("File not found in the specified folder.");
        }
      });
    this.http
      .get(listFilesUrl, { responseType: "json" })
      .subscribe((response: any) => {
        const matchingFile = response.files.find(
          (file: any) => file.name === "d2.txt"
        );

        if (matchingFile) {
          const fileId = matchingFile.id;
          const fileUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${this.googleDriveService.API_KEY}`;

          this.http
            .get(fileUrl, { responseType: "text" })
            .subscribe((data: any) => {
              this.d2 = data;
            });
        } else {
          console.log("File not found in the specified folder.");
        }
      });

  }


  
  
  
  
  hidebtn(){
    this.btnhide=false
  }
  openFolder(folder: any, option: boolean): void {
    this.googleDriveService
      .listImagesInFolder(folder.id)
      .subscribe((response: any) => {
        folder.images = response.files;
        this.selectedFolder = folder;
        this.hide = option;

      });
  }

  onTouchStart(event: TouchEvent) {
    this.touchstartX = event.touches[0].clientX;
  }
  onImageLoad() {
    this.imageLoaded = true;
  }
  defaultyear()
  {
    this.currentYear=new Date().getFullYear();
    if (this.currentYear == 2022) {
      this.googleDriveService.setFolderId("1fEMd_cIUsbeX6O3oUmhSjwZS_ADAjEDB");
      this.yearselcted = true;
      this.validyear=true

    }
    if (this.currentYear == 2023) {
      this.googleDriveService.setFolderId("1wHS5EZ5pHK-2fpqO_JKuoUVSR17m4lg-");
      this.yearselcted = true;
      this.validyear=true

    }

    if (this.currentYear == 2024) {
      this.googleDriveService.setFolderId("1fQm1azuqwQUxs38bjuLdT95EZquP2fLm");
      this.validyear = true

    }
    if (this.currentYear == 2025) {
      this.googleDriveService.setFolderId("1iwI11_l-qun8DQDjSn1T-nS1D9F1hIrq");
      this.validyear = true

    }
    if (this.currentYear == 2026) {
      this.googleDriveService.setFolderId("1lhv0VmJHVcs4W3WjK9YPN7MzU3ClQ7fr");
      this.validyear = true

    }
  }
  fetchBanner(): void {
    this.googleDriveService.setFolderId('1hw4B9diVCPogf9D4nbu0QbdUbf6EfIaW')
    this.banner().subscribe((response: any) => {
      this.data = response.files;
      console.log(this.data);
    });
    this.googleDriveService.setFolderId('1qWmv2EQpXqx8GcXjCpgEBeWiBlKkI3q2')
    this.portrait().subscribe((response: any) => {
      this.Banner = response.files;
      console.log(this.data);
    });
    this.googleDriveService.setFolderId('14vG6gXWTk4NsfB2ed1GM4txv32rjcb4W')
    this.landscape().subscribe((response: any) => {
      this.Banner1 = response.files;
      console.log(this.data);
    });
  }
  portrait(): Observable<any> {
    const folderid='1qWmv2EQpXqx8GcXjCpgEBeWiBlKkI3q2'
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderid}' in parents and mimeType!='application/vnd.google-apps.folder'`, // Filters out folders
      key: this.googleDriveService.API_KEY, // Include your API key here
    };
    console.log("banner work")
  
    return this.http.get(apiUrl, { params });
  }
  landscape(): Observable<any> {
    const folderid='14vG6gXWTk4NsfB2ed1GM4txv32rjcb4W'
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderid}' in parents and mimeType!='application/vnd.google-apps.folder'`, // Filters out folders
      key: this.googleDriveService.API_KEY, // Include your API key here
    };
    console.log("banner work")
  
    return this.http.get(apiUrl, { params });
  }
  banner(): Observable<any> {
    const folderid='1hw4B9diVCPogf9D4nbu0QbdUbf6EfIaW'
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderid}' in parents and mimeType!='application/vnd.google-apps.folder'`, // Filters out folders
      key: this.googleDriveService.API_KEY, // Include your API key here
    };
    console.log("banner work")
  
    return this.http.get(apiUrl, { params });
  }
  onTouchEnd(event: TouchEvent) {
    if (this.touchstartX !== null) {
      const touchendX = event.changedTouches[0].clientX;
      const deltaX = touchendX - this.touchstartX;

      if (deltaX > 0) {
        // Right swipe
        if (this.controls && this.currentIndex > 0) {
          this.prevImage();
        }
      } else if (deltaX < 0) {
        // Left swipe
        if (
          this.controls &&
          this.currentIndex < this.selectedFolder.images.length - 1
        ) {
          this.nextImage();
        }
      }

      this.touchstartX = null;
    }
  }
  calendar(){
    this.yearchanged=false
    this.gallery=false
  }
  focus() {
    this.yearchanged=true;
    this.validyear=false;

  }
  yearselector(newYear: Date): void {
    this.currentYear=newYear.getFullYear()
    const yearname =newYear.getFullYear().toString()
    if (newYear.getFullYear() == 2022) {
      this.googleDriveService.setFolderId("1fEMd_cIUsbeX6O3oUmhSjwZS_ADAjEDB");
      this.googleDriveService.FestivalFolders().subscribe((festivals: any[]) => {
        this.festival = festivals;
        });
        this.yearchanged=false
        this.validyear=true


    }
    if (newYear.getFullYear() == 2023) {
      this.googleDriveService.setFolderId("1wHS5EZ5pHK-2fpqO_JKuoUVSR17m4lg-");
      this.googleDriveService.FestivalFolders().subscribe((festivals: any[]) => {
        this.festival = festivals;
        });
        this.yearchanged=false
        this.validyear=true


    }

    if (newYear.getFullYear() == 2024) {
      this.googleDriveService.setFolderId("1fQm1azuqwQUxs38bjuLdT95EZquP2fLm");
      this.googleDriveService.FestivalFolders().subscribe((festivals: any[]) => {
        this.festival = festivals;
        });
      this.yearchanged=false
      this.validyear=true


    }
    if (newYear.getFullYear() == 2025) {
      this.googleDriveService.setFolderId("1iwI11_l-qun8DQDjSn1T-nS1D9F1hIrq");
      console.log(this.googleDriveService.folderId);
    }
    if (newYear.getFullYear() == 2026) {
      this.googleDriveService.setFolderId("1lhv0VmJHVcs4W3WjK9YPN7MzU3ClQ7fr");
      this.googleDriveService.FestivalFolders().subscribe((festivals: any[]) => {
        this.festival = festivals;
        });
        this.yearchanged=false
        this.validyear=true

    }
    this.cd.detectChanges();
  }
  redirectToVideo(imageId: string) {
    // Get the YouTube video link associated with the image (you'll need to implement this logic)
    const youtubeLink = imageId;
    console.log(imageId);
    // Redirect to the YouTube video link
    window.open(youtubeLink, "_blank");
  }

  onPreviewImage(index: number): void {
    const sortedImages = this.sortImagesByFilename(this.selectedFolder.images);
    console.log("clicked");
    console.log(index);
    console.log(sortedImages.length);
    if (index >= 0 && index < sortedImages.length) {
      this.currentIndex = index;
      this.currentLightboxImage = sortedImages[index];
      console.log("Image Data:", this.currentLightboxImage);
      this.showMask = true;
      this.showCount = true;
      this.previewImage = true;
    }
  }
  getImageUrl(imageId: string): string {
    // Construct the image URL using the image ID
    return `https://drive.google.com/uc?id=${imageId}`;
  }

  sortFestivalsByMonth() {
    const sortedFestivals = this.festival.slice(); // Create a copy of the original array
    sortedFestivals.sort((a, b) => {
      return a.month.localeCompare(b.month);
    });
  
    return sortedFestivals;
  }

  closeLightbox(): void {
    this.showMask = false;
    this.showCount = false;
    this.previewImage = false;
  }

  prevImage(): void {
    const sortedImages = this.sortImagesByFilename(this.selectedFolder.images);
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentLightboxImage = sortedImages[this.currentIndex];
    }
  }

  nextImage(): void {
    const sortedImages = this.sortImagesByFilename(this.selectedFolder.images);
    if (this.currentIndex < sortedImages.length - 1) {
      this.currentIndex++;
      this.currentLightboxImage = sortedImages[this.currentIndex];
    }
  }
  onAnimatedEnd(event: AnimationEvent) {
    if (event.toState == "void") {
      this.showMask = false;
    }
  }
  onClosePreview() {
    this.previewImage = false;
  }
  goBack(): void {
    this.selectedFolder = null;
    this.hide = true;

  }
  // Sort the images by filename in numerical order
  sortImagesByFilenames(images: any[]): any[] {
    return images.slice().sort((a, b) => {
      // Assuming the filenames are in the format "x.jpg"
      const filenameA = parseInt(a.name.split(".")[0], 10);
      const filenameB = parseInt(b.name.split(".")[0], 10);
      return filenameA - filenameB;
    });
  }

  sortImagesByFilename(images: any[]): any[] {
    const sortedImages = images.slice().sort((a, b) => {
      // Assuming the filenames are in the format "x.jpg"
      const filenameA = parseInt(a.name.split(".")[0], 10);
      const filenameB = parseInt(b.name.split(".")[0], 10);
      return filenameA - filenameB;
    });

    // Remove images with filename "t.jpg"
    const filteredImages = sortedImages.filter(
      (image) => image.name !== "t.jpg"
    );

    return filteredImages;
  }

  fetchFoldersAndImages(): void {
    this.googleDriveService.listFolders().subscribe((folderResponse: any) => {
      this.folders = folderResponse.files;

      // Log the fetched folders
      console.log("Fetched folders:", this.folders);

      // Fetch images for each folder
      const folderImageRequests = this.folders.map((folder, index) =>
        this.googleDriveService.listImagesInFolder(folder.id).pipe(
          map((imageResponse: any) => {
            // Assign an index to maintain the original folder order
            imageResponse.folderIndex = index;

            // Log the images in the folder
            console.log("Images in folder:", imageResponse.files);

            return imageResponse;
          })
        )
      );

      // Wait for all image requests to complete
      forkJoin(folderImageRequests).subscribe((imageResponses: any[]) => {
        // Sort images by filename in numerical order and assign them to corresponding folders
        imageResponses.forEach((imageResponse) => {
          imageResponse.files = this.sortImagesByFilenames(imageResponse.files);

          const folder = this.folders[imageResponse.folderIndex];
          folder.images = imageResponse.files;
        });
      });
    });
  }

  fetchFolders(): void {
    this.googleDriveService.listFolders().subscribe((response: any) => {
      this.folders = response.files;
      console.log(this.folders);
    });
  }
  fetchyears(): void {
    this.googleDriveService
      .fetchyears(this.googleDriveService.folderId)
      .subscribe((response: any) => {
        this.years = response.files;
        console.log(this.years);
      });
  }

  @HostListener("window:keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    // Check if left arrow key is pressed
    if (event.key === "ArrowLeft") {
      // Check conditions before calling prevImage()
      if (this.controls && this.currentIndex > 0) {
        this.prevImage();
      }
    }
    if (event.key === "ArrowRight") {
      // Check conditions before calling nextImage()
      if (
        this.controls &&
        this.currentIndex < this.selectedFolder.images.length - 1
      ) {
        this.nextImage();
      }
    }
    if (event.key === "Escape") {
      this.onClosePreview();
    }
  }
  @HostListener("window:keydown", ["$event"])
  onKeyPress(event: KeyboardEvent): void {
    // Check if the pressed key is the Print Screen key
    if (event.key === "PrintScreen") {
      // Screenshot detected
      this.screenshotDetected = true;
      alert("Screenshot Not Allowed");
    }
  }
  redirectToYouTube() {
    window.open(this.ylink, "_blank"); // Open the YouTube link in a new tab/window
  }

  getThumbnailUrl(folder: any): string {
    const thumbImage = folder.images?.find(
      (image: Image) => image.name === "t.jpg"
    );

    if (thumbImage) {
      return this.getImageUrl(thumbImage.id);
    }
    return ""; // Replace with your default thumbnail image path
  }


  selectYear(event: any) {
    this.selectedYear = event.target.value;

    console.log("Selected year: " + this.selectedYear);
  }

  isMobileScreen = false;

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.isMobileScreen = window.innerWidth < 768;
  }
}
