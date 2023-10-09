// google-drive.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_KEY = 'AIzaSyALShFqHfafegJ5Aw8Rz5fdK1MLKd_sQms';
  private folderId: string='';
  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    const url = `https://www.googleapis.com/drive/v3/files?q='${this.folderId}'+in+parents&key=${this.API_KEY}`;

    return this.http.get(url);
  }
  getImageUrl(imageId: string): string {
    // Construct the image URL using the image ID
    return `https://drive.google.com/uc?id=${imageId}`;
  }
  setFolderId(folderId: string) {
    this.folderId = folderId;
  }
}
