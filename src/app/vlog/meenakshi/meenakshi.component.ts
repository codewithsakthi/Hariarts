import { Component, HostListener } from '@angular/core';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-meenakshi',
  templateUrl: './meenakshi.component.html',
  styleUrls: ['./meenakshi.component.css'],
  animations:[
    trigger('animation',[
      transition('void=>visible',[
      style({transform:'scale(0.5)'}),
      animate('150ms',style({transform:'scale(1)'}) )
    ]),
  ]),
  trigger('animation',[
    transition('visible=>void',[
    style({transform:'scale(1)'}),
    animate('150ms',style({transform:'scale(0.5)'}) )
  ]),
]),
  trigger('animation2', [ 
    transition(':leave',[
    style({opacity: 1}),
    animate('50ms', style({opacity: 0.8}))
    ])
]),
]

})
export class MeenakshiComponent {
  panelOpenState = false;
  years: number[] = [2020, 2021, 2022, 2023, 2024];
  selectedYear: Date = new Date();
  ytvvideo =[
  { tag: '2023/1', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/2', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/3', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/4', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/5', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/6', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/7', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/8', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/9', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },
  { tag: '2023/10', imgSrc: 'https://www.youtube.com/watch?v=RDQKsC36v00' },

]
  galleryItems = [
// Day 1
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/1.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/2.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/3.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/4.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/5.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/6.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/7.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/8.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/9.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/10.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/Meena/Day - 1/11.jpg' },


// Day 2
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/1.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/2.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/3.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/4.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/5.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/6.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/7.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/8.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/9.jpg' },
// { tag: '2023/2', imgSrc: '../../../assets/Vlog/Meena/Day - 2/10.jpg' }



// Day 3
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/1.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/2.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/3.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/4.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/5.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/6.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/7.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/8.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/9.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/10.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/11.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/12.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/13.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/14.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/15.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/16.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/17.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/18.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/19.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/20.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/21.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/22.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/23.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/24.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/25.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/26.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/Meena/Day - 3/27.jpg' },


    // Day 4
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/1.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/2.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/3.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/4.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/5.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/6.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/7.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/8.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/9.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/10.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/11.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/12.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/13.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/14.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/Meena/Day - 4/15.jpg' },

    // Day 5
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/1.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/2.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/3.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/4.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/5.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/6.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/7.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/8.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/9.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/10.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/11.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/12.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/13.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/14.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/15.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/16.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/17.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/18.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/19.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/20.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/21.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/22.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/23.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/24.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/25.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/26.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/27.jpg' },
{ tag: '2023/5', imgSrc: '../../../assets/Vlog/Meena/Day - 5/28.jpg' },


// Day 6
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/1.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/2.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/3.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/4.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/5.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/6.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/7.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/8.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/9.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/11.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/12.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/13.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/14.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/15.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/16.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/17.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/18.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/19.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/20.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/21.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/22.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/23.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/24.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/25.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/26.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/27.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/28.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/29.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/30.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/31.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/32.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/33.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/34.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/35.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/36.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/37.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/38.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/39.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/40.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/41.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/42.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/43.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/44.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/45.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/46.jpg' },



// Day 7
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/1.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/2.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/3.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/4.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/5.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/6.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/7.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/8.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/9.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/Meena/Day - 6/10.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/10.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/11.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/12.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/13.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/14.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/15.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/16.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/17.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/18.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/19.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/20.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/21.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/22.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/23.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/24.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/25.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/26.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/Meena/Day - 7/27.jpg' },



    // Day 8
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/1.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/2.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/3.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/4.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/5.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/6.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/7.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/8.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/9.jpg' },
    { tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/10.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/11.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/12.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/13.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/14.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/15.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/16.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/17.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/18.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/19.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/20.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/21.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/22.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/23.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/24.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/25.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/26.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/27.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/28.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/29.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/Meena/Day - 8/30.jpg' },


    // Day 9
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/1.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/2.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/3.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/4.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/5.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/6.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/7.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/8.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/9.jpg' },
    // { tag: '2023/9', imgSrc: '../../../assets/Vlog/Meena/Day - 9/10.jpg' },

    // Day 10
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/Meena/Day - 10/1.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/Meena/Day - 10/2.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/Meena/Day - 10/3.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/Meena/Day - 10/4.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/Meena/Day - 10/5.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/Meena/Day - 10/6.jpg' },

]


isMobileScreen = false;

@HostListener('window:resize', ['$event'])
onResize(event: Event): void {
  // Check the screen width and set isMobileScreen accordingly
  this.isMobileScreen = window.innerWidth < 768; // Adjust the breakpoint as needed
}

  selectedTag: string | null = null;

  constructor() {
    // Initialize with all items
    this.filteredItems = this.galleryItems;
    this.totalImageCount = this.galleryItems.length;
    this.videoitem=this.ytvvideo;

  }
  videoitem: any[];
  filteredItems: any[];

  filterItems(tag: string | null) {
    if (tag === null) {
      // If no tag is selected, show all items
      this.filteredItems = this.galleryItems;
      this.videoitem = this.ytvvideo;

    } else {
      // Filter items based on the selected tag
      this.filteredItems = this.galleryItems.filter(item => item.tag === tag);
      this.videoitem = this.ytvvideo.filter(item => item.tag === tag);

    }

    // Update the selected tag
    this.selectedTag = tag;
  }



  previewImage = false;
  showMask = false;
  currentLightboxImage: { tag: string; imgSrc: string } = { tag: '', imgSrc: '' };
  currentIndex = 0;
  controls = true;
  showCount = false;
  totalImageCount = 0;

  ngOninit():void
  {
this.totalImageCount=this.galleryItems.length;
  }

 

  onPreviewImage(index: number): void {
    if (index >= 0 && index < this.filteredItems.length) {
      this.currentIndex = index;
      this.currentLightboxImage = this.filteredItems[index]; 
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
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentLightboxImage = this.filteredItems[this.currentIndex];
    }
  }
  
  nextImage(): void {
    if (this.currentIndex < this.filteredItems.length - 1) {
      this.currentIndex++;
      this.currentLightboxImage = this.filteredItems[this.currentIndex];
    }
  }
  onAnimatedEnd(event:AnimationEvent){
    if(event.toState =='void')
    {
      this.showMask=false;
    }
  }
  onClosePreview(){
    this.previewImage=false;
  }

}
