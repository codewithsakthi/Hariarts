// google-drive.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin, map, of, switchMap } from 'rxjs';
declare var gapi: any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly API_URL = 'https://www.googleapis.com/drive/v3';
  public readonly API_KEY = 'AIzaSyALShFqHfafegJ5Aw8Rz5fdK1MLKd_sQms';
  public folderId: string='';
  constructor(private http: HttpClient) { }
  public currentYearFolderData$ = new BehaviorSubject<any[]>([]);
  festivalfolders:any[]=[]
  yearfolders:any[]=[]

  public festivals: any[] = [];
rootid:string=''
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

  getFolderUrl(folderId: string): string {
    return `https://drive.google.com/drive/folders/${folderId}`;
  }
  listFolders(): Observable<any> {
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${this.folderId}' in parents and mimeType='application/vnd.google-apps.folder'`,
      key: this.API_KEY,
    };
    return this.http.get(apiUrl, { params });
  }

  listImagesInFolder(folderId: string): Observable<any> {
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderId}' in parents and not mimeType='application/vnd.google-apps.folder'`,
      key: this.API_KEY,
    };
  
    return this.http.get(apiUrl, { params });
  }

  fetchyears(folderId: string): Observable<any> {
    const apiUrl = 'https://www.googleapis.com/drive/v3/files';
    const params = {
      q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder'`,
      key: this.API_KEY,
    };
    return this.http.get(apiUrl, { params });
  }

  FestivalFolders(): Observable<any[]> {
    return this.listFolders().pipe(
      map((folderResponse: any) => {
        this.festivalfolders = folderResponse.files;
        const festivals: any[] = [];
  
        this.festivalfolders = this.festivalfolders.filter((folder: any) => {
          const folderName = folder.name;
          const folderNameParts = folderName.split('-');
          
          if (folderNameParts.length === 2) {
            const monthNumber = parseInt(folderNameParts[1]);
            if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
              // Store folder name (festival), month number, and folderId in an object and push it to the festivals array
              festivals.push({ festivalName: folderNameParts[0], month: monthNumber, folderId: folder.id });
              return true;
            }
          }
          return false;
        });
  
        // Sort festivals by month number
        festivals.sort((a, b) => a.month - b.month);
  
        console.log('Filtered festival folders:', this.festivalfolders);
        console.log('Festivals:', festivals);
  
        return festivals; // Return the festivals array as an Observable
      })
    );
  }
  
  
  
  YearFolders(folderid:string): Observable<any[]> {
    return this.fetchyears(folderid).pipe(
      map((folderResponse: any) => {
        this.yearfolders = folderResponse.files;
        const festivals: any[] = [];
  
        this.yearfolders = this.yearfolders.filter((folder: any) => {
          const folderName = folder.name;
          
          // Check if the folder name consists of only 4 digits (a year) and nothing else
          if (/^\d{4}$/.test(folderName)) {
            const folderId = folder.id;
  
            // Store the folder name (year) and folderId in an object and push it to the festivals array
            festivals.push({ year: folderName, folderId });
  
            return true;
          }
  
          return false;
        });
  
        console.log('Year folders:', this.yearfolders);  
        return festivals; // Return the festivals array as an Observable
      })
    );
  }
  
  
  // Function to validate month names
  isValidMonth(monthName: string): boolean {
    // List of valid month names
    const validMonthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    return validMonthNames.includes(monthName);
  }
  
  


}
