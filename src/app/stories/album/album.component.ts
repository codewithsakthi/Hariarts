import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface EngagementItem {
  title: string;
  imageSrc: string;
  imageUrls: string[];
  coupleId: number;
  data: { imageSrc: string; imageAlt: string }[];
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' }))
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' }))
      ])
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 }))
      ])
    ])
  ]
})
export class AlbumComponent {
  
  constructor(private route: ActivatedRoute) {}

  items: EngagementItem[] = [
    {
      title: 'Sajani & Suyambu Wedding',
      imageSrc: '../../assets/stories/s1/s1',
      imageUrls: [
        '../../assets/stories/s1/s1',
        '../../assets/stories/s1/s2.jpg',
        '../../assets/stories/s1/S3.jpg',
      ],
      coupleId: 1,
      data: [
        {
          imageSrc: '../../assets/stories/s1/s1.jpg',
          imageAlt: '1'
        },
        {
          imageSrc: '../../assets/stories/s1/s2.jpg',
          imageAlt: '2'
        },
        {
          imageSrc: '../../assets/stories/s1/s3.jpg',
          imageAlt: '3'
        },
        {
          imageSrc: '../../assets/stories/s1/s4.jpg',
          imageAlt: '4'
        },
        {
          imageSrc: '../../assets/stories/s1/s33.jpg',
          imageAlt: '5'
        },
        {
          imageSrc: '../../assets/stories/s1/s32.jpg',
          imageAlt: '6'
        },
        {
          imageSrc: '../../assets/stories/s1/s7.jpg',
          imageAlt: '7'
        },
        {
          imageSrc: '../../assets/stories/s1/s8.jpg',
          imageAlt: '8'
        },
        {
          imageSrc: '../../assets/stories/s1/s9.jpg',
          imageAlt: '9'
        },
        {
          imageSrc: '../../assets/stories/s1/s10.jpg',
          imageAlt: '10'
        },
        // ... more images ...
      ]
    },
    {
      title: 'Another Engagement',
      imageSrc: '../../assets/stories/s2/s2',
      imageUrls: [
        '../../assets/stories/s2/s2',
        '../../assets/stories/s2/s2.jpg',
        '../../assets/stories/s2/S3.jpg',
      ],
      coupleId: 2,
      data: [
        {
          imageSrc: 'https://images.unsplash.com/photo-1642628658566-1db49cadf78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
          imageAlt: '9'
        },
        // ... more images ...
      ]
    }
    // Add more data objects as needed
  ];

  coupleAlbum: EngagementItem | undefined;
  previewImage = false;
  showMask = false;
  currentLightboxImage: { imageSrc: string; imageAlt: string } = { imageSrc: '', imageAlt: '' };
  currentIndex = 0;
  controls = true;
  showCount = false;
  totalImageCount = 0;

  ngOnInit(): void {
    // Get the coupleId from the route parameters
    this.route.params.subscribe(params => {
      const coupleId = +params['coupleId']; // Use the correct parameter name you defined in your route configuration.

      // Find the album data based on coupleId
      this.coupleAlbum = this.items.find(item => item.coupleId === coupleId);

      if (this.coupleAlbum) {
        this.totalImageCount = this.coupleAlbum.data.length;
      }
      console.log(this.coupleAlbum)
    });
  }

  onPreviewImage(index: number): void {
    if (this.coupleAlbum) {
      this.currentIndex = index;
      this.currentLightboxImage = this.coupleAlbum.data[index];
      this.showMask = true;
      this.showCount = true;
      this.previewImage = true;
    }
  }

  closeLightbox(): void {
    this.showMask = false;
    this.showCount = false;
    this.previewImage = false;
  }

  prevImage(): void {
    if (this.coupleAlbum && this.currentIndex > 0) {
      this.currentIndex--;
      this.currentLightboxImage = this.coupleAlbum.data[this.currentIndex];
    }
  }

  nextImage(): void {
    if (this.coupleAlbum && this.currentIndex < this.coupleAlbum.data.length - 1) {
      this.currentIndex++;
      this.currentLightboxImage = this.coupleAlbum.data[this.currentIndex];
    }
  }

  onAnimatedEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }
}
