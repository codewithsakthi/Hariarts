import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
interface Image {
  id: string;
  mimeType: string;
  name: string;
}
@Component({
  selector: 'app-cinehigh',
  templateUrl: './cinehigh.component.html',
  styleUrls: ['./cinehigh.component.css']
})
export class CinehighComponent {
  images: Image[] = [];

  constructor(private googleDriveService: AuthService) {}
  ngOnInit() {
    this.googleDriveService.setFolderId('1M4w9LJmCPR6wy6c-RYk6nADkw9oLsPsY');
    this.googleDriveService.getImages().subscribe((data: any) => {
    this.images = data.files;
    });
  }
  redirectToVideo(imageId: string) {
    const youtubeLink = imageId;
   console.log(imageId)
    // Redirect to the YouTube video link
    window.open(youtubeLink, '_blank');
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
    // Construct the image URL using the image ID
    return `https://drive.google.com/uc?id=${imageId}`;
  }
}
