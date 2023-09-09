import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  videos: { title: string, videoUrl: string, safeVideoUrl: SafeResourceUrl,description:string}[] = [
    {
      title: "Capturing the Elegance",
      videoUrl: 'https://www.youtube.com/embed/auRT8KVNc-U',
      safeVideoUrl: '',
      description: "Shruthi's Grand Half Saree Ceremony",
    },
    {
      title: 'Capturing the Love',
      videoUrl: 'https://www.youtube.com/embed/mnCCjB2bGtw',
      safeVideoUrl: '',
      description: "Enchanting Pre-Wedding Outdoor Shoot at Nandhil Hills ",
    },
    {
      title: 'Candid Moments',
      videoUrl: 'https://www.youtube.com/embed/GcHxkquTpN4',
      safeVideoUrl: '',
      description: "Cinematic Engagement Teaser | Candid Moments | #EngagementPromo",
    },
    {
      title: 'Cinematic Wedding Highlight',
      videoUrl: 'https://www.youtube.com/embed/x7jRU5nhJ58',
      safeVideoUrl: '',
      description: "Jothika & Sathish's  Wedding Highlight | Sourashtra Wedding Moments",
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.videos.forEach(video => {
      video.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video.videoUrl);
    });
  }
}
