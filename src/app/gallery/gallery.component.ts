import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryItems = [
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W1.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W2.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W3.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W4.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W5.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W6.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W7.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W8.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W9.jpg' },
    { tag: 'Wedding', imgSrc: '../../assets/Wedding/W10.jpg' },

    { tag: 'Baby', imgSrc: '../../assets/Baby/B1.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B2.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B3.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B4.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B5.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B6.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B7.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B8.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B9.jpg' },
    { tag: 'Baby', imgSrc: '../../assets/Baby/B10.jpg' },

    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E1.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E2.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E3.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E4.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E5.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E6.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E7.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E8.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E9.jpg' },
    { tag: 'Engagement', imgSrc: '../../assets/Engagement/E10.jpg' },
    // Add more items as needed for other categories
];



  selectedTag: string | null = null;

  constructor() {
    // Initialize with all items
    this.filteredItems = this.galleryItems;
  }

  filteredItems: any[];

  filterItems(tag: string | null) {
    if (tag === null) {
      // If no tag is selected, show all items
      this.filteredItems = this.galleryItems;
    } else {
      // Filter items based on the selected tag
      this.filteredItems = this.galleryItems.filter(item => item.tag === tag);
    }

    // Update the selected tag
    this.selectedTag = tag;
  }
}
