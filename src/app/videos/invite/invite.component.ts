import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
interface Image {
  id: string;
  mimeType: string;
  name: string;
}
@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent {
  images: Image[] = [];

  constructor(private googleDriveService: AuthService) {}
  ngOnInit() {
    this.googleDriveService.setFolderId('103o-BCN6PLl_8GCkFZThcRjp3Qg7rHh1');
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

