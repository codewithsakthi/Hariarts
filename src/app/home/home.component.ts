import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: string[] = [
    '../../assets/Slider/S6.jpg',
    '../../assets/Slider/S5.jpg',
    '../../assets/Slider/W1.jpg',
    '../../assets/Slider/W5.jpg',
    '../../assets/Slider/W4.jpg',
    '../../assets/Slider/S3.jpg',

  ];

  text =" Welcome to Hari Arts"

}
