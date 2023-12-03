import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Subscription, map } from 'rxjs';
import * as Hammer from 'hammerjs';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {HinduComponent} from '../../app/portfolio/GrandEvent/hindu/hindu.component'

interface Folder {
  images: any[]; // Change 'any' to the actual type of your images
  // Add any other properties you expect in a folder
}
interface Image {
  id: string;
  mimeType: string;
  name: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
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


export class PortfolioComponent implements OnInit {
  folders: any[] = [];

  imageLoaded: boolean = false;
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
  folder: Folder = { images: [] }; 
  images: any[] = [];
  @ViewChild('swipeElement')
  swipeElement!: ElementRef;

  private touchstartX: number | null = null;
  onTouchStart(event: TouchEvent) {
    this.touchstartX = event.touches[0].clientX;
  }

  private queryParamsSubscription: Subscription = new Subscription;

  onTouchEnd(event: TouchEvent) {
    if (this.touchstartX !== null) {
      const touchendX = event.changedTouches[0].clientX;
      const deltaX = touchendX - this.touchstartX;
      
      if (deltaX > 0) {
        // Right swipe
        if (this.controls && this.currentIndex > 0) {
          this.prevImage();
        }
      } else if
      (deltaX < 0) {
        // Left swipe
        if (this.controls && this.currentIndex < this.selectedFolder.images.length - 1) {
          this.nextImage();
        }
      }

      this.touchstartX = null;
    }
  }

 

  constructor(private driveApiService: AuthService,private route: ActivatedRoute,private router: Router,private location: Location) {
    this.screenshotDetected = false;
    
  }

  private isReloading: boolean = false;

  ngOnInit(): void {
    this.fetchFolders();
    this.fetchFoldersAndImages();
    console.log('Activated Route Snapshot:', this.route.snapshot);
    
    this.route.queryParams.subscribe(params => {
      const folderId = params['folderId'];
      console.log('Folder ID:', folderId);
      this.driveApiService.setFolderId(folderId);
      this.driveApiService.listImagesInFolder(folderId).subscribe((response: any) => {
        this.folder.images = response.files;
        this.selectedFolder = this.folder;
        this.hide = false;
      });

    });
  }

  // Sort the images by filename in numerical order
  sortImagesByFilename(images: any[]): any[] {
    const sortedImages = images.slice().sort((a, b) => {
      // Assuming the filenames are in the format "x.jpg"
      const filenameA = parseInt(a.name.split('.')[0], 10);
      const filenameB = parseInt(b.name.split('.')[0], 10);
      return filenameA - filenameB;
    });
  
    // Remove images with filename "t.jpg"
    const filteredImages = sortedImages.filter(image => image.name !== 't.jpg');
  
    return filteredImages;
  }

  fetchFoldersAndImages(): void {
    this.driveApiService.listFolders().subscribe((folderResponse: any) => {
      this.folders = folderResponse.files;

      // Log the fetched folders

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
      console.log(this.folders);
    });
  }

  getImageUrl(imageId: string): string {
    const imageUrl = `https://drive.google.com/uc?id=${imageId}`;
    return imageUrl;
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



  closeLightbox(): void {
    this.showMask = false;
    this.showCount = false;
    this.previewImage = false;
  }

  onPreviewImage(index: number): void {
    const sortedImages = this.sortImagesByFilename(this.selectedFolder.images);
    if (index >= 0 && index < sortedImages.length-1) {
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



  onClosePreview() {
    this.previewImage = false;
  }
 ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
 @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.defaultPrevented) {
      return;
    }
  
    // Mark the event as handled to prevent further execution by other listeners
    event.preventDefault();
  
    // Continue with your logic as before
    if (event.key === 'ArrowLeft') {
      if (this.controls && this.currentIndex > 0) {
        this.prevImage();
      }
    }
    if (event.key === 'ArrowRight') {
      if (this.controls && this.currentIndex < this.selectedFolder.images.length - 1) {
        this.nextImage();
      }
    }
    if (event.key === 'Escape') {
      this.onClosePreview();
    }

    // Check if the pressed key is the Print Screen key
    if (event.key === 'PrintScreen') {
      // Screenshot detected
      this.screenshotDetected = true;
      alert(1);
    }
  }
}
