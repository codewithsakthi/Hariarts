import { Component, OnInit, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import KeenSlider, { KeenSliderInstance,KeenSliderPlugin } from "keen-slider"
const animation = { duration: 10000, easing: (t: any) => t }
import { Router } from '@angular/router';


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
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css',
      "../../../node_modules/keen-slider/keen-slider.min.css"
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
export class GalleryComponent implements OnInit {
[x: string]: any;
  @ViewChild('sliderRef') sliderRef!: ElementRef;

  slider: KeenSliderInstance | null = null;
data:Data[] = []
Banner:Data[] = []
slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  images: Image[] = [];
  imageIds: any[] = [];
  sortedFolderImages: any[] = [];
  previewImage = false;
  showMask = false;
  currentLightboxImage: { tag: string; id: string } = { tag: '', id: '' };
  currentIndex = 0;
  controls = true;
  showCount = false;
  totalImageCount = 0;
  screenshotDetected: boolean =false;
  private touchstartX: number | null = null;
  imageLoaded: boolean = false;
  gallery:boolean=false
  buttonsAndImages = [
    { title: 'Bridal Portraits', imageSrc: '../../assets/Gallery/1.jpg', id: '1kuG6FeHqFHNobC4H-vKDSNkr4cpgHN6m' },
    { title: 'Groom Portraits', imageSrc: '../../assets/Gallery/2.jpg', id: '1DQZZ0u8cidkOkyi01NZbBll38doLFFmd' },
    { title: 'Couple Portraits', imageSrc: '../../assets/Gallery/3.jpg', id: '1795t_YmjY20fmnwHT0MJB7JYTaOYYd4W' },
    { title: 'Candid Moments', imageSrc: '../../assets/Gallery/4.jpg', id: '1kuG6FeHqFHNobC4H-vKDSNkr4cpgHN6m' },
    { title: 'Puberty Portraits', imageSrc: '../../assets/Gallery/5.jpg', id: '1DQZZ0u8cidkOkyi01NZbBll38doLFFmd' },
    { title: 'Maternity Portraits', imageSrc: '../../assets/Gallery/6.jpg', id: '1795t_YmjY20fmnwHT0MJB7JYTaOYYd4W' },
    // Add more objects for additional buttons and images
  ];
    navigateToAnotherComponent(folderId: string,folderName:string): void {
    // Navigate to another component with folderId as a query parameter
    this.router.navigate(['/Portraits'], {
      queryParams: { id:folderId, title: folderName}
    });
    
  }
  constructor(private googleDriveService: AuthService,private http: HttpClient,private router: Router) { }
  images1: any[] | undefined;
  folderName:string=''
  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
   const isMobile = window.innerWidth <= 768; // You may adjust this threshold based on your design
    const perView = isMobile ? 2 : 4; // Change perView to 1 on mobile, otherwise 4
    if (this.sliderRef) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
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
    }    }, 3000); // Adjust the delay time as needed
  }

    ngOnDestroy() {
    if (this.slider)  this.slider.destroy()
  }
  
  ngOnInit() {

    this.googleDriveService.setFolderId('1kuG6FeHqFHNobC4H-vKDSNkr4cpgHN6m');
    this.googleDriveService.getImages().subscribe((data: any) => {
    this.images = data.files;
    this.totalImageCount=this.images.length; 
    this.fetchBanner();
    console.log(this.data)
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    });
  }
  back(){
    this.gallery=false;
  }
  fetchBanner(): void {
    this.banner().subscribe((response: any) => {
      this.data = response.files;
      console.log(this.data);
    });
    this.portrait().subscribe((response: any) => {
      this.Banner = response.files;
      console.log(this.data);
    });
  }
  banner(): Observable<any> {
    const folderid='1MgVCWMGyaNrBT-tMtuQn_zHnQINE9PN8'
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderid}' in parents and mimeType!='application/vnd.google-apps.folder'`, // Filters out folders
      key: this.googleDriveService.API_KEY, // Include your API key here
    };
    console.log("banner work")
  
    return this.http.get(apiUrl, { params });
  }
  portrait(): Observable<any> {
    const folderid='1I8fonXxUxoSSRQ30ro5WKLWHUOIGyn7Z'
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderid}' in parents and mimeType!='application/vnd.google-apps.folder'`, // Filters out folders
      key: this.googleDriveService.API_KEY, // Include your API key here
    };
    console.log("banner work")
  
    return this.http.get(apiUrl, { params });
  }
  onPreviewImage(index: number): void {
    const sortedImages = this.sortImagesByFilename(this.images);
    console.log("clicked")
    console.log(index)
    console.log(sortedImages.length)
    if (index >= 0 && index < sortedImages.length) {
      this.currentIndex = index;
      this.currentLightboxImage = sortedImages[index];
      console.log('Image Data:', this.currentLightboxImage);
      this.showMask = true;
      this.showCount = true;
      this.previewImage = true;
    }
  }
dynamicdisplay(folderId:string,folderName:string){
  this.googleDriveService.setFolderId(folderId);
  this.googleDriveService.getImages().subscribe((data: any) => {
  this.images = data.files;
  this.gallery=true;
  this.folderName=folderName

  });
}
  
  sortImagesByFilename(images: any[]): any[] {
    return images.slice().sort((a, b) => {
      // Assuming the filenames are in the format "x.jpg"
      const filenameA = parseInt(a.name.split('.')[0], 10);
      const filenameB = parseInt(b.name.split('.')[0], 10);
      return filenameA - filenameB;
    });
  }

  getImageUrl(imageId: string): string {
    return `https://drive.google.com/uc?id=${imageId}`;
  }

  onTouchStart(event: TouchEvent) {
    this.touchstartX = event.touches[0].clientX;
  }
  onImageLoad() {
    this.imageLoaded = true;
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
          this.currentIndex < this.images.length - 1
        ) {https://drive.google.com/open?id=1KixWZiYPVfY7X6ir-vnx_XLMhezARY-E&usp=drive_copy
          this.nextImage();
        }
      }
  
      this.touchstartX = null;
    }
  }

  closeLightbox(): void {
    this.showMask = false;
    this.showCount = false;
    this.previewImage = false;
  }
  
  prevImage(): void {
    const sortedImages = this.sortImagesByFilename(this.images);
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentLightboxImage = sortedImages[this.currentIndex];
    }
  }
  
  nextImage(): void {
    const sortedImages = this.sortImagesByFilename(this.images);
    if (this.currentIndex < sortedImages.length - 1) {
      this.currentIndex++;
      this.currentLightboxImage = sortedImages[this.currentIndex];
    }
  }
  onAnimatedEnd(event:AnimationEvent){
    if(event.toState =='void')
    {
      this.showMask=false;
    }
  }
  onClosePreview(){
    console.log("clicked")
    this.previewImage=false;
  }
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Check if left arrow key is pressed
    if (event.key === 'ArrowLeft') {
      // Check conditions before calling prevImage()
      console.log("left")
      if (this.controls && this.currentIndex > 0) {
        this.prevImage();
      }
    }
    if (event.key === 'ArrowRight') {
      // Check conditions before calling nextImage()
      console.log("right")

      if (
        this.controls &&
        this.currentIndex < this.images.length - 1
      ) {
        this.nextImage();
      }
    }
    if (event.key === 'Escape') {
      console.log(1)

      this.closeLightbox();
    }
  }
  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    // Check if the pressed key is the Print Screen key
    if (event.key === 'PrintScreen') {
      // Screenshot detected
      this.screenshotDetected = true;
      alert("Screenshot Not Allowed");
    }
  }
  
}
