import { Component, HostListener, OnInit } from '@angular/core';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-meenakshi',
  templateUrl: './meenakshi.component.html',
  styleUrls: ['./meenakshi.component.css'],
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
export class MeenakshiComponent implements OnInit{
  panelOpenState = false;
  images: any[] = [];
  galleryItems = [
    // Day 1
    { tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/1.jpg' },

]
selectedYear: string = '2023'; // Default selected year

selectYear(event: Event) {
  const target = event.target as HTMLSelectElement;
  this.selectedYear = target.value;
  // You can add logic here to filter the days based on the selected year.
  // For example you can update the visibility of day buttons or load data for that year.
}








isMobileScreen = false;

@HostListener('window:resize', ['$event'])
onResize(event: Event): void {
  // Check the screen width and set isMobileScreen accordingly
  this.isMobileScreen = window.innerWidth < 768; // Adjust the breakpoint as needed
}

  selectedTag: string | null = null;

  constructor(private googleDriveService: AuthService) {
    this.filteredItems = this.galleryItems;
    

  }

  filteredItems: any[];

  filterItems(tag: string | null) {
    if (tag === null) {
      this.filteredItems = this.galleryItems;
    } else {
      this.filteredItems = this.galleryItems.filter(item => item.tag === tag);
    }
    this.selectedTag = tag;
  }


  previewImage = false;
  showMask = false;
  currentLightboxImage: { tag: string; id: string } = { tag: '', id: '' };
  currentIndex = 0;
  controls = true;
  showCount = false;
  totalImageCount = 0;
  thumbnail:string='';
  ylink:string='';
  ngOnInit()
  {
    this.totalImageCount=this.images.length; 
    
  }

 day(folderId:string,thumb:string,ylink:string){
  this.googleDriveService.setFolderId(folderId);
  this.googleDriveService.getImages().subscribe((data: any) => {
  this.images = data.files;
  this.thumbnail=thumb;
  this.ylink=ylink;
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
