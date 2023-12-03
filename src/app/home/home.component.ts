import { Component, OnInit, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import { AuthService } from '../auth.service';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'hammerjs';
import KeenSlider, { KeenSliderInstance,KeenSliderPlugin } from "keen-slider"
const animation = { duration: 10000, easing: (t: any) => t }
import { initFlowbite } from 'flowbite';
interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

interface Image {
  id: string;
  mimeType: string;
  name: string;
}
interface Data {
  id: string;
  mimeType: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  "../../../node_modules/keen-slider/keen-slider.min.css",
  "../../../node_modules/primeflex/primeflex.css",
]
})
export class HomeComponent {
  Banner:Data[] = []
  Banner1:Data[] = []
  Banner2:Data[] = []
  Banner3:Data[] = []
  Banner4:Data[] = []

  startTouchY:any;
  currentImageIndex: number = 0;
  rows: number = 13;
  // imageUrls = [

  //   '../assets/New folder/1.jpg'    ,
  //   '../assets/New folder/2.jpg',
  //   '../assets/New folder/3.jpg',
  //   '../assets/New folder/4.jpg',
  //   '../assets/New folder/5.jpg',
  //   '../assets/New folder/6.jpg',
  //   '../assets/New folder/7.jpg',
  //   '../assets/New folder/8.jpg',
  //   '../assets/New folder/9.jpg',
  //   '../assets/New folder/10.jpg',
  //   '../assets/New folder/11.jpg',
  //   '../assets/New folder/12.jpg',
  //   '../assets/New folder/13.jpg',
  //   '../assets/New folder/14.jpg',
  //   '../assets/New folder/15.jpg',
  //   '../assets/New folder/16.jpg',
  //   '../assets/New folder/17.jpg',
  //   '../assets/New folder/18.jpg',
  //     ];

  currentPage: number = 1; // Current page

  getCurrentPageImages(): Data[] {
    const start = (this.currentPage - 1) * this.rows;
    const end = start + this.rows;
    
    const startIndex = Math.max(0, start);
    const endIndex = Math.min(this.Banner4.length, end);
  
    return this.Banner4.slice(startIndex, endIndex);
  }
  
  
  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.Banner4.length / this.rows);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }
  show: boolean = false
  
  showMenu(){
    this.show =! this.show
    
  }
 
  
  text =" Welcome to Hari Arts"
  @ViewChild('video') video!: ElementRef;

  slider: KeenSliderInstance | null = null;
  @ViewChild('sliderRef') sliderRef!: ElementRef;

  slider1: KeenSliderInstance | null = null;
  @ViewChild('sliderRef1') sliderRef1!: ElementRef;

  slider2: KeenSliderInstance | null = null;
  @ViewChild('sliderRef2') sliderRef2!: ElementRef;

  slider3: KeenSliderInstance | null = null;
  @ViewChild('sliderRef3') sliderRef3!: ElementRef;

  slider4: KeenSliderInstance | null = null
  thumbnailSlider: KeenSliderInstance | null = null
  @ViewChild("sliderRef4") sliderRef4!: ElementRef
  @ViewChild("thumbnailRef1") thumbnailRef1!: ElementRef


  constructor(private renderer: Renderer2,private googleDriveService: AuthService,private http: HttpClient,private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    // Get a reference to the video element
    setTimeout(() => {
      this.initializeKeenSlider();
      this.initializeKeenSlider1();
    }, 3000); // Adjust the delay time as needed
    const videoElement = this.video.nativeElement;

    window.addEventListener('scroll', () => {
      this.handleVideoPlayback(videoElement);
    });

    // Initial check to see if the video should play on page load
    this.handleVideoPlayback(videoElement);
  }
  ngOnDestroy() {
    if (this.slider)  this.slider.destroy()
    if (this.slider1) this.slider1.destroy()
    if (this.slider2) this.slider2.destroy()
    if (this.slider3) this.slider3.destroy()
    if (this.slider4) this.slider4.destroy()

    if (this.thumbnailSlider) this.thumbnailSlider.destroy()

  }
  private initializeKeenSlider() {
    const isMobile = window.innerWidth <= 768; // You may adjust this threshold based on your design
    const perView = isMobile ? 2 : 4; // Change perView to 1 on mobile, otherwise 4
    if (this.sliderRef) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: {
          min: -4,
          max: 4,
        },
        // created(s) {
        //   s.moveToIdx(5, true, animation)
        // },
        // updated(s) {
        //   s.moveToIdx(s.track.details.abs + 5, true, animation)
        // },
        // animationEnded(s) {
        //   s.moveToIdx(s.track.details.abs + 5, true, animation)
        // },
      });
    }
    if (this.sliderRef1) {
      this.slider1 = new KeenSlider(this.sliderRef1.nativeElement, {
        loop: true,
        mode: 'free-snap',
        slides: {
          perView: perView,
          spacing: 15,
        },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      });
    };

    if (this.sliderRef2) {
      this.slider2 = new KeenSlider(this.sliderRef2.nativeElement, {
        loop: true,
        mode: 'free-snap',
        slides: {
          perView: perView,
          spacing: 15,
        },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      });
    };
  }
  private initializeKeenSlider1() {
    const isMobile = window.innerWidth <= 768; // You may adjust this threshold based on your design
    const perView = isMobile ? 2 : 4; // Change perView to 1 on mobile, otherwise 4
    if (this.sliderRef3) {
      this.slider3 = new KeenSlider(this.sliderRef3.nativeElement, {
        loop: true,
        mode: 'free-snap',
        slides: {
          perView: perView,
          spacing: 15,
        },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      });
    };

    

  }
  ngOnInit() {
    initFlowbite();

    this.googleDriveService.setFolderId('1kuG6FeHqFHNobC4H-vKDSNkr4cpgHN6m');
    this.fetchBanner();

  }
  testi = [
    {
        name: 'Maria Smantha',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
        comment: 'Lorem ipsum dolor sit amet...',
        stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt']
    },
    {
        name: 'Lisa Cudrow',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
        comment: 'Ut enim ad minima veniam...',
        stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star']
    },
    {
        name: 'John Smith',
        image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp',
        comment: 'At vero eos et accusamus...',
        stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'far fa-star']
    }
];


  

  
  
  fetchBanner(): void {
    this.portrait('1U9OyUu5SvhoFG-Czh0d7KoUH84U8X4Yw').subscribe((response: any) => {
      this.Banner = response.files;
    });
    this.portrait('1I8fonXxUxoSSRQ30ro5WKLWHUOIGyn7Z').subscribe((response: any) => {
      this.Banner1 = response.files;
    });
    this.portrait('1I8fonXxUxoSSRQ30ro5WKLWHUOIGyn7Z').subscribe((response: any) => {
      this.Banner2 = response.files;
    });
    this.portrait('1I8fonXxUxoSSRQ30ro5WKLWHUOIGyn7Z').subscribe((response: any) => {
      this.Banner3 = response.files;
    });
    this.portrait('1pgE05bbB4V0T5xFC8-Y1mBQ6WSo6J7Q-').subscribe((response: any) => {
      this.Banner4 = response.files;
    });
  }
  getImageUrl(imageId: string): string {
    return `https://drive.google.com/uc?id=${imageId}`;
  }
  portrait(folderids:string): Observable<any> {
    const folderid=folderids
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderid}' in parents and mimeType!='application/vnd.google-apps.folder'`, // Filters out folders
      key: this.googleDriveService.API_KEY, // Include your API key here
    };
    console.log("banner work")
  
    return this.http.get(apiUrl, { params });
  }

  handleVideoPlayback(videoElement: HTMLVideoElement) {
    if (this.isElementInViewport(videoElement)) {
      // If the video is in the viewport and paused, play it
      if (videoElement.paused) {
        this.renderer.removeStyle(videoElement, 'muted');
        videoElement.play();
      }
    } else {
      // If the video is not in the viewport or playing, pause it
      if (!videoElement.paused) {
        this.renderer.setStyle(videoElement, 'muted', 'true');
        videoElement.pause();
      }
    }
  }
  

  isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  playVideo() {
    this.video.nativeElement.play();
  }

  pauseVideo() {
    this.video.nativeElement.pause();
  }


}
