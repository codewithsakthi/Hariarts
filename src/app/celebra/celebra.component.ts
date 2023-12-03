import { Component, HostListener ,ChangeDetectorRef, NgZone} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable, forkJoin, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

interface Data {
  id: string;
  mimeType: string;
  name: string;
}

@Component({
  selector: 'app-celebra',
  templateUrl: './celebra.component.html',
  styleUrls: ['./celebra.component.css']
})
export class CelebraComponent {
  imageLoaded: boolean = false;
  folderId: string = "";
  festival: any[] = [];
  folders: any[] = [];
  hide: boolean = false;
  selectedFolderImages: any[] = [];
  sortedFolderImages: any[] = [];
  selectedFolderName = "";
  selectedFolder: any = null;
  private touchstartX: number | null = null;
  yearselcted: boolean = false;
  data: Data[] = [];
  yearchanged: boolean = false;
  btnhide: boolean = false;
  validyear=false;
  sortedFestivals:any[]=[]
  gallery:boolean=false

  constructor(
    private googleDriveService: AuthService,
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    var kasamusa:any;
    this.route.queryParams.subscribe(params => {
      kasamusa = params['folderId'];
        });
    this.selectMonth(kasamusa) 
    this.googleDriveService.folderId=this.folderId
    this.folderId = this.googleDriveService.folderId;
    this.googleDriveService.FestivalFolders().subscribe((festivals: any[]) => {
    this.festival = festivals;
    });
  }
  navigateToAnotherComponent(folder: any): void {
    this.router.navigate(['/day'], {
      queryParams: { folderData: JSON.stringify(folder) }
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
    this.fetchFoldersAndImages();
    this.getThumbnailUrl(this.folders);

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
  getThumbnailUrl(folder: any): string {
    const thumbImage = folder.images?.find(
      (image: Data) => image.name === "t.jpg"
    );

    if (thumbImage) {
      return this.getImageUrl(thumbImage.id);
    }
    return ""; // Replace with your default thumbnail image path
  }
  getImageUrl(imageId: string): string {
    // Construct the image URL using the image ID
    return `https://drive.google.com/uc?id=${imageId}`;
  }
}
