import { Component } from '@angular/core';


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

}
