import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private itemsData!: any[]; // Define the variable to store items.data

  constructor() {}

  // Method to set items.data
  setItemsData(data: any[]) {
    this.itemsData = data;
  }

  // Method to retrieve items.data
  getItemsData() {
    return this.itemsData;
  }
}
