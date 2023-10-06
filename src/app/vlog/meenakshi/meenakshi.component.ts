import { Component } from '@angular/core';


@Component({
  selector: 'app-meenakshi',
  templateUrl: './meenakshi.component.html',
  styleUrls: ['./meenakshi.component.css'],

})
export class MeenakshiComponent {
  panelOpenState = false;
  galleryItems = [
    { tag: '', imgSrc: '' },
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
