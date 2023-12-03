import { Component, HostListener } from '@angular/core';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
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
export class ReceptionComponent {
  images: any[] = [];
  imageIds: any[] = [];
  sortedFolderImages: any[] = [];
  selectedFolder: any = null;
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
  constructor(private googleDriveService: AuthService) { }

  
  ngOnInit() {
    this.googleDriveService.setFolderId('1XM9fRx9Mn0derDpfc3C7Jjdo9Z2ANR4C');
    this.googleDriveService.getImages().subscribe((data: any) => {
    this.images = data.files;
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
  }

