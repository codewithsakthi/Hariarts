import { Component, HostListener } from '@angular/core';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-vandiyur',
  templateUrl: './vandiyur.component.html',
  styleUrls: ['./vandiyur.component.css'],
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
export class VandiyurComponent {


panelOpenState = false;
images: any[] = [];

selectedYear: string = '2023'; // Default selected year

selectYear(event: Event) {
const target = event.target as HTMLSelectElement;
this.selectedYear = target.value;
}

redirectToYouTube() {
  window.open(this.ylink, '_blank'); // Open the YouTube link in a new tab/window
}


isMobileScreen = false;

@HostListener('window:resize', ['$event'])
onResize(event: Event): void {
this.isMobileScreen = window.innerWidth < 768;
}


constructor(private googleDriveService: AuthService) {}

// In your component.ts file
activeButtonIndex: number | null = null;

previewImage = false;
showMask = false;
currentLightboxImage: { tag: string; id: string } = { tag: '', id: '' };
currentIndex = 0;
controls = true;
showCount = false;
totalImageCount = 0;
activeButton: number = -1;
thumbnail:string='';
title:string='';
ylink:string='';

ngOnInit()
{
  this.totalImageCount=this.images.length; 
  
}

day(folderId:string,thumb:string,ylink:string,title: string,index: number){
this.googleDriveService.setFolderId(folderId);
this.googleDriveService.getImages().subscribe((data: any) => {
this.images = data.files;
this.thumbnail=thumb;
this.ylink=ylink;
this.title=title;
this.activeButtonIndex = index;


});
}


onPreviewImage(index: number): void {
  if (index >= 0 && index < this.images.length) {
    this.currentIndex = index;
    this.currentLightboxImage = this.images[index]; 
    console.log('Image Data:', this.currentLightboxImage);
    this.showMask = true;
    this.showCount = true;
    this.previewImage = true;
  }
}
getImageUrl(imageId: string): string {
  // Construct the image URL using the image ID
  return `https://drive.google.com/uc?id=${imageId}`;
}


closeLightbox(): void {
  this.showMask = false;
  this.showCount = false;
  this.previewImage = false;
}

prevImage(): void {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.currentLightboxImage = this.images[this.currentIndex];
  }
}

nextImage(): void {
  if (this.currentIndex < this.images.length - 1) {
    this.currentIndex++;
    this.currentLightboxImage = this.images[this.currentIndex];
  }
}
onAnimatedEnd(event:AnimationEvent){
  if(event.toState =='void')
  {
    this.showMask=false;
  }
}
onClosePreview(){
  this.previewImage=false;
}

}
