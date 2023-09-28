import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: string[] = [
    '../../assets/back1.jpg',
    '../../assets/back1.jpg',
    '../../assets/back1.jpg',
    '../../assets/back1.jpg',
    '../../assets/back1.jpg',

  ];

  text =" Welcome to Hari Arts"

}
