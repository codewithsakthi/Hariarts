import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  data = [
    {
      imageSrc: '../../assets/package/1.jpg',
    },
    {
      imageSrc: '../../assets/package/2.jpg',
    },
    {
      imageSrc: '../../assets/package/3.jpg',
    },
    {
      imageSrc: '../../assets/package/4.jpg',
    },
    {
      imageSrc: '../../assets/package/5.jpg',
    },
    {
      imageSrc: '../../assets/package/6.jpg',
    },

  ]

  previewImage = false;
  showMask = false;
  currentLightboxImage: { imageSrc: string;  } = { imageSrc: ''};
  currentIndex = 0;
  controls = true;
  showCount = false;
  totalImageCount = 0;

  ngOninit():void
  {
this.totalImageCount=this.data.length;
  }

  constructor() {
    this.totalImageCount = this.data.length;
  }

  onPreviewImage(index: number): void {
    this.currentIndex = index;
    this.currentLightboxImage = this.data[index];
    this.showMask = true;
    this.showCount = true;
    this.previewImage = true;
  }

  closeLightbox(): void {
    this.showMask = false;
    this.showCount = false;
    this.previewImage = false;
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentLightboxImage = this.data[this.currentIndex];
    }
  }

  nextImage(): void {
    if (this.currentIndex < this.data.length - 1) {
      this.currentIndex++;
      this.currentLightboxImage = this.data[this.currentIndex];
    }
  }
 
  onClosePreview(){
    this.previewImage=false;
  }

  
}
