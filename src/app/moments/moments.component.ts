import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css'],
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
export class MomentsComponent {
  data = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '1'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642670310920-6f4e3a3adee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: '2'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642570517818-99c0fd6f0349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      imageAlt: '3'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '4'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642618215095-3523a9a36893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imageAlt: '5'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642628658566-1db49cadf78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      imageAlt: '6'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '7'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80',
      imageAlt: '8'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      imageAlt: '9'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '10'
    }
  ]

  previewImage = false;
  showMask = false;
  currentLightboxImage: { imageSrc: string; imageAlt: string } = { imageSrc: '', imageAlt: '' };
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

