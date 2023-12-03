import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../.../../auth.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { filter, map } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
interface Image {
  id: string;
  mimeType: string;
  name: string;
}
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent {
  [x: string]: any;
  email: string = '';
  password: string = '';
  verification: boolean = false;
  selectedFolder: any = null;
  imageLoaded: boolean = false;
  folders: any[] = [];
  hide: boolean = true;
  currentUrl:string=''
  constructor(private driveApiService: AuthService,private route: ActivatedRoute,private router: Router) {
       console.log(this.router.url)

  }
  navigateToAnotherComponent(folderId: string): void {
    // Navigate to another component with folderId as a query parameter
    this.router.navigate(['/Folder'], {
      queryParams: { folderId: folderId }
    });
    
  }
  ngOnInit(): void {
    this.driveApiService.setFolderId('1iJy7ShH2ybtbYDPPHlkV7u-GlJ2PX8Uh');
    this.fetchFolders();
    this.fetchFoldersAndImages();
    this.getThumbnailUrl(this.folders)
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(
      () => {
        this.currentUrl = this.router.url;
      },
      (error) => {
        console.error('Error in router event subscription: ', error);
      }
    );
    
    
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
        this.driveApiService.setFolderId('1iJy7ShH2ybtbYDPPHlkV7u-GlJ2PX8Uh');
        this.fetchFolders();
        this.fetchFoldersAndImages();
      }
    });
  }
  getCurrentUrl() {
    const currentUrlTree = this['router'].createUrlTree(this.route.snapshot.url);
    const currentUrl = this['router'].serializeUrl(currentUrlTree);
    console.log(currentUrl)
    return currentUrl;
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



  setOtpButtons() {
    if (this.email === "hari@gmail.com" && this.password === "hari") {

      this.verification = true;
    } 
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

  getThumbnailUrl(folder: any): string {
    const thumbImage = folder.images?.find((image: Image) => image.name === 't.jpg');

    if (thumbImage) {
      return this.getImageUrl(thumbImage.id);
    }
    return ''; // Replace with your default thumbnail image path
  }
}
