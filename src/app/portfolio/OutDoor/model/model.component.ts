import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../.../../auth.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { map } from 'rxjs';
import * as Hammer from 'hammerjs';
import { ActivatedRoute, Router } from '@angular/router';

interface Image {
  id: string;
  mimeType: string;
  name:string;
}
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
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

export class ModelComponent implements OnInit {
  folders: any[] = [];
  loading: { [key: string]: boolean } = {}; // Object to track loading state

  selectedFolderImages: any[] = [];
  sortedFolderImages: any[] = [];
  selectedFolderName = '';
  selectedFolder: any = null;
  hide: boolean = true;
  previewImage = false;
  showMask = false;
  currentLightboxImage: { tag: string; id: string } = { tag: '', id: '' };
  currentIndex = 0;
  controls = true;
  showCount = false;
  totalImageCount = 0;
  private screenshotDetected: boolean = false;
  showParentComponent = true;

  images: any[] = [];
  @ViewChild('swipeElement')
  swipeElement!: ElementRef;

  private touchstartX: number | null = null;

  onTouchStart(event: TouchEvent) {
    this.touchstartX = event.touches[0].clientX;
  }
  navigateToAnotherComponent(folderId: string): void {
    // Navigate to another component with folderId as a query parameter
    this.router.navigate(['/Folder'], {
      queryParams: { folderId: folderId }
    });
    
  }
  // Add a property to track image loading
imageLoaded: boolean = false;

// Function to set the loading state
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
        if (this.controls && this.currentIndex < this.selectedFolder.images.length - 1) {
          this.nextImage();
        }
      }

      this.touchstartX = null;
    }
  }



  constructor(private driveApiService: AuthService,private route: ActivatedRoute,private router: Router
    ) {
    this.screenshotDetected = false;
  }

  ngOnInit(): void {
    this.driveApiService.setFolderId('166Usa7Rt52xupt2mEUfMmvhNuGbC68Fh');
    this.fetchFolders();
    this.fetchFoldersAndImages();
    this.getThumbnailUrl(this.folders)
    this.route.queryParams.subscribe(params => {
      const folderId = params['folderId'];
      
      if (folderId) {
        // Fetch and display the folder based on folderId
        this.driveApiService.listImagesInFolder(folderId).subscribe((response: any) => {
          this.selectedFolder = response;
          this.hide = false;
        });
      } else {
        // If no folderId in query parameters, load initial data
        this.driveApiService.setFolderId('166Usa7Rt52xupt2mEUfMmvhNuGbC68Fh');
        this.fetchFolders();
        this.fetchFoldersAndImages();
      }
    });
  }

  // Sort the images by filename in numerical order
  sortImagesByFilename(images: any[]): any[] {
    return images.slice().sort((a, b) => {
      // Assuming the filenames are in the format "x.jpg"
      const filenameA = parseInt(a.name.split('.')[0], 10);
      const filenameB = parseInt(b.name.split('.')[0], 10);
      return filenameA - filenameB;
    });
  }

  fetchFoldersAndImages(): void {
    this.driveApiService.listFolders().subscribe((folderResponse: any) => {
      this.folders = folderResponse.files;

      // Fetch images for each folder
      const folderImageRequests = this.folders.map((folder, index) =>
        this.driveApiService.listImagesInFolder(folder.id).pipe(
          map((imageResponse: any) => {
            // Assign an index to maintain the original folder order
            imageResponse.folderIndex = index;

            // Log the images in the folder

            return imageResponse;
          })
        )
      );

      // Wait for all image requests to complete
      forkJoin(folderImageRequests).subscribe((imageResponses: any[]) => {
        // Sort images by filename in numerical order and assign them to corresponding folders
        imageResponses.forEach((imageResponse) => {
          imageResponse.files = this.sortImagesByFilename(imageResponse.files);

          const folder = this.folders[imageResponse.folderIndex];
          folder.images = imageResponse.files;
        });
      });
    });
  }

  fetchFolders(): void {
    this.driveApiService.listFolders().subscribe((response: any) => {
      this.folders = response.files;
    });
  }

  getImageUrl(imageId: string): string {
    return `https://drive.google.com/uc?id=${imageId}`;
  }

  fetchImagesInFolder(folderId: string): void {
    // Define the query string to order files by name in descending order
    const queryString = `q='${folderId}' in parents&orderBy=name desc&fields=files(id,name)`;

    this.driveApiService.listImagesInFolder(queryString).subscribe((response: any) => {
      this.selectedFolderImages = response.files;
      this.selectedFolderName = response.folderName;
    });
  }

  openFolder(folder: any, option: boolean): void {
    this.driveApiService.listImagesInFolder(folder.id).subscribe((response: any) => {
      folder.images = response.files;
      this.selectedFolder = folder;
      this.hide = option;
    });
  }

  goBack(): void {
    this.selectedFolder = null;
    this.hide = true;
  }

  getThumbnailUrl(folder: any): string {
    const thumbImage = folder.images?.find((image: Image) => image.name === 't.jpg');

    if (thumbImage) {
      return this.getImageUrl(thumbImage.id);
    }
    return ''; // Replace with your default thumbnail image path
  }

  closeLightbox(): void {
    this.showMask = false;
    this.showCount = false;
    this.previewImage = false;
  }

  onPreviewImage(index: number): void {
    const sortedImages = this.sortImagesByFilename(this.selectedFolder.images);
    if (index >= 0 && index < sortedImages.length) {
      this.currentIndex = index;
      this.currentLightboxImage = sortedImages[index];
      console.log('Image Data:', this.currentLightboxImage);
      this.showMask = true;
      this.showCount = true;
      this.previewImage = true;
    }
  }

  prevImage(): void {
    const sortedImages = this.sortImagesByFilename(this.selectedFolder.images);
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentLightboxImage = sortedImages[this.currentIndex];
    }
  }

  onAnimatedEnd(event: AnimationEvent) {
    if (event.toState == 'void') {
      this.showMask = false;
    }
  }

  nextImage(): void {
    const sortedImages = this.sortImagesByFilename(this.selectedFolder.images);
    if (this.currentIndex < sortedImages.length - 1) {
      this.currentIndex++;
      this.currentLightboxImage = sortedImages[this.currentIndex];
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Check if left arrow key is pressed
    if (event.key === 'ArrowLeft') {
      // Check conditions before calling prevImage()
      if (this.controls && this.currentIndex > 0) {
        this.prevImage();
      }
    }
    if (event.key === 'ArrowRight') {
      // Check conditions before calling nextImage()
      if (this.controls && this.currentIndex < this.selectedFolder.images.length - 1) {
        this.nextImage();
      }
    }
    if (event.key === 'Escape') {
      this.onClosePreview();
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    // Check if the pressed key is the Print Screen key
    if (event.key === 'PrintScreen') {
      // Screenshot detected
      this.screenshotDetected = true;
      alert(1);
    }
  }
}
