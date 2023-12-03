import { Component, HostListener ,ChangeDetectorRef, NgZone} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { Observable, forkJoin, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { Router } from '@angular/router';

interface Data {
  id: string;
  mimeType: string;
  name: string;
}

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
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
export class DayComponent {
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
folderName:string=''
  gallery:boolean=false
  showDiv: boolean = false;

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
  constructor(
    private googleDriveService: AuthService,
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private zone: NgZone,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    var kasamusa:any;
    var kasamusa1:any;

  
    this.route.queryParams.subscribe(params => {
      // Retrieve the 'folderName' parameter
      kasamusa = params['folderName'];
      this.folderName=params['folderId'];
      console.log(kasamusa); // You can now use this.folderName in your component

    });
    this.fetchBanner(kasamusa)
  }

  fetchBanner(folderid:any): void {
    this.portrait(folderid).subscribe((response: any) => {
      this.Banner = response.files;
    });
  }

  portrait(folderids:string): Observable<any> {
    const folderid=folderids
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderid}' in parents and mimeType!='application/vnd.google-apps.folder'`, // Filters out folders
      key: this.googleDriveService.API_KEY, // Include your API key here
    };
    console.log("banner work")
  
    return this.http.get(apiUrl, { params });
  }
  openFolder(folder: any, option: boolean): void {
    this.googleDriveService
      .listImagesInFolder(folder)
      .subscribe((response: any) => {
        console.log(response)
        console.log()
        this.Banner = response.files;
        this.selectedFolder = folder;
        this.hide = option;

      });
  }
  onTouchStart(event: TouchEvent) {
    this.touchstartX = event.touches[0].clientX;
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
          this.currentIndex < this.Banner.length - 1
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

  redirectToVideo(imageId: string) {
    // Get the YouTube video link associated with the image (you'll need to implement this logic)
    const youtubeLink = imageId;
    console.log(imageId);
    // Redirect to the YouTube video link
    window.open(youtubeLink, "_blank");
  }

  onPreviewImage(index: number): void {
    if (this.Banner) {
      // Ensure you are consistently using the correct data source
      const sortedImages = this.sortImagesByFilename(this.Banner);
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
    } else {
      console.error('Banner or images is null.');
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
    const sortedImages = this.sortImagesByFilename(this.Banner);
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentLightboxImage = sortedImages[this.currentIndex];
    }
  }

  nextImage(): void {
    const sortedImages = this.sortImagesByFilename(this.Banner);
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

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Check if the event has already been handled by this component
    if (event.defaultPrevented) {
      return;
    }
  
    // Mark the event as handled to prevent further execution by other listeners
    event.preventDefault();
  
    // Continue with your logic as before
    if (event.key === 'ArrowLeft') {
      console.log("hi")
      if (this.controls && this.currentIndex > 0) {

        this.prevImage();
      }
    }
    if (event.key === 'ArrowRight') {
      if (this.controls && this.currentIndex < this.Banner.length - 1) {
        this.nextImage();
      }
    }
    if (event.key === 'Escape') {
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
      (image: Data) => image.name === "t.jpg"
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
