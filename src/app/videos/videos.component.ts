import { Component, OnInit, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
const animation = { duration: 10000, easing: (t: any) => t }
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
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css',
  "../../../node_modules/keen-slider/keen-slider.min.css"
]
})
export class VideosComponent {
  allvideo = false
  reels = false
  candid = false
  visible = false;
  name=''
  size: 'large' | 'default' = 'default';

  get title(): string {
    return `${this.size} Drawer`;
  }

  showDefault(category:boolean,name:string): void {
    this.size = 'default';
    this.allvideo=category
    this.open();
    this.name=name
  }
    showDefault1(category:boolean,name:string): void {
    this.size = 'default';
    this.reels=category
    this.open();
    this.name=name
  }
    showDefault2(category:boolean,name:string): void {
    this.size = 'default';
    this.candid=category
    this.open();
    this.name=name
  }

  showLarge(): void {
    this.size = 'large';
    this.open();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.allvideo=false;
    this.candid=false;
    this.reels=false
  }

  data:Data[] = []
  Banner:Data[] = []
  @ViewChild('sliderRef') sliderRef!: ElementRef;
  slider: KeenSliderInstance | null = null;

  @ViewChild('sliderRef1') sliderRef1!: ElementRef;
  slider1: KeenSliderInstance | null = null;

  @ViewChild('sliderRef2') sliderRef2!: ElementRef;
  slider2: KeenSliderInstance | null = null;

ngOnInit() {

  this.fetchBanner();
  console.log(this.data)

}
ngAfterViewInit() {
  // Get a reference to the video element
  setTimeout(() => {
    this.initializeKeenSlider();
  }, 1000); // Adjust the delay time as needed

  this.slider = new KeenSlider(this.sliderRef.nativeElement, {
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
}
ngOnDestroy() {
  if (this.slider) this.slider.destroy()
}
private initializeKeenSlider() {
  if (this.sliderRef) {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 4,
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
  }
  if (this.sliderRef1) {
    this.slider1 = new KeenSlider(this.sliderRef1.nativeElement, {
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 4,
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
  }

  if (this.sliderRef2) {
    this.slider2 = new KeenSlider(this.sliderRef2.nativeElement, {
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 4,
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
  }


}
constructor(private googleDriveService: AuthService,private http: HttpClient) { }
getImageUrl(imageId: string): string {
  return `https://drive.google.com/uc?id=${imageId}`;
}

  fetchBanner(): void {
    this.portrait().subscribe((response: any) => {
      this.Banner = response.files;
      console.log(this.data);
    });
  }
  portrait(): Observable<any> {
    const folderid='1I8fonXxUxoSSRQ30ro5WKLWHUOIGyn7Z'
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderid}' in parents and mimeType!='application/vnd.google-apps.folder'`, // Filters out folders
      key: this.googleDriveService.API_KEY, // Include your API key here
    };
    console.log("banner work")
  
    return this.http.get(apiUrl, { params });
  }
}
