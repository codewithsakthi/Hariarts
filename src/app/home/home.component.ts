import { Component,ElementRef, Renderer2, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: string[] = [
    '../../assets/Slider/1.jpg',
    '../../assets/Slider/2.jpg',
    '../../assets/Slider/3.jpg',
    '../../assets/Slider/4.jpg',
    '../../assets/Slider/5.jpg',
    '../../assets/Slider/6.jpg',
    '../../assets/Slider/7.jpg',
    '../../assets/Slider/8.jpg',
    '../../assets/Slider/9.jpg',



  ];

  text =" Welcome to Hari Arts"
  @ViewChild('video') video!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    // Get a reference to the video element
    const videoElement = this.video.nativeElement;

    // Add a scroll event listener to handle video playback
    window.addEventListener('scroll', () => {
      this.handleVideoPlayback(videoElement);
    });

    // Initial check to see if the video should play on page load
    this.handleVideoPlayback(videoElement);
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
