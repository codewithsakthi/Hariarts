import { Component, HostListener } from '@angular/core';
import { animate, style, transition, trigger,AnimationEvent } from '@angular/animations';


@Component({
  selector: 'app-vandiyur',
  templateUrl: './vandiyur.component.html',
  styleUrls: ['./vandiyur.component.css'],
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
export class VandiyurComponent {
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
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/1.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/2.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/3.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/4.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/5.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/6.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/7.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/8.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/9.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/10.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/11.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/12.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/13.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/14.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/15.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/16.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/17.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/18.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/19.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/20.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/21.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/22.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/23.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/24.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/25.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/26.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/27.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/28.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/29.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/30.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/31.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/32.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/33.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/34.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/35.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/36.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/37.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/38.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/39.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/40.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/41.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/42.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/43.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/44.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/45.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/46.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/47.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/48.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/49.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/50.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/51.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/52.jpg' },
{ tag: '2023/1', imgSrc: '../../../assets/Vlog/vandiyur/Day - 1/53.jpg' },



// Day 2
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/1.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/2.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/3.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/4.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/5.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/6.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/7.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/8.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/9.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/10.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/11.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/12.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/13.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/14.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/15.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/16.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/17.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/18.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/19.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/20.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/21.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/22.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/23.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/24.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/25.jpg' },
{ tag: '2023/2', imgSrc: '../../../assets/Vlog/vandiyur/Day - 2/26.jpg' },




// Day 3
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/1.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/2.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/3.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/4.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/5.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/6.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/7.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/8.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/9.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/10.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/11.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/12.jpg' },
{ tag: '2023/3', imgSrc: '../../../assets/Vlog/vandiyur/Day - 3/13.jpg' },


    // Day 4
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/1.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/2.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/3.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/4.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/5.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/6.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/7.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/8.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/9.jpg' },
    { tag: '2023/4', imgSrc: '../../../assets/Vlog/vandiyur/Day - 4/10.jpg' },


    // Day 5
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/1.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/2.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/3.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/4.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/5.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/6.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/7.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/8.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/9.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/10.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/11.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/12.jpg' },
    { tag: '2023/5', imgSrc: '../../../assets/Vlog/vandiyur/Day - 5/13.jpg' },



// Day 6
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/1.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/2.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/3.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/4.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/5.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/6.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/7.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/8.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/9.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/11.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/12.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/13.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/14.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/15.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/16.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/17.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/18.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/19.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/20.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/21.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/22.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/23.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/24.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/25.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/26.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/27.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/28.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/29.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/30.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/31.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/32.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/33.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/34.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/35.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/36.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/37.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/38.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/39.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/40.jpg' },



// Day 7
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/1.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/2.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/3.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/4.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/5.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/6.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/7.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/8.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/9.jpg' },
{ tag: '2023/6', imgSrc: '../../../assets/Vlog/vandiyur/Day - 6/10.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/10.jpg' },
{ tag: '2023/7', imgSrc: '../../../assets/Vlog/vandiyur/Day - 7/11.jpg' },




    // Day 8
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/1.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/2.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/3.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/4.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/5.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/6.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/7.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/8.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/9.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/10.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/11.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/12.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/13.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/14.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/15.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/16.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/17.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/18.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/19.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/20.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/21.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/22.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/23.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/24.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/25.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/26.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/27.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/28.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/29.jpg' },
{ tag: '2023/8', imgSrc: '../../../assets/Vlog/vandiyur/Day - 8/30.jpg' },


    // Day 9
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/1.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/2.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/3.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/4.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/5.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/6.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/7.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/8.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/9.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/10.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/11.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/12.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/13.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/14.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/15.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/16.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/17.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/18.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/19.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/20.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/21.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/22.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/23.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/24.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/25.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/26.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/27.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/28.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/29.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/30.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/31.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/32.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/33.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/34.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/35.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/36.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/37.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/38.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/39.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/40.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/41.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/42.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/43.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/44.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/45.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/46.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/47.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/48.jpg' },
{ tag: '2023/9', imgSrc: '../../../assets/Vlog/vandiyur/Day - 9/49.jpg' },


    // Day 10
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/1.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/2.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/3.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/4.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/5.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/6.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/7.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/8.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/9.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/10.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/11.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/12.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/13.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/14.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/15.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/16.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/17.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/18.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/19.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/20.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/21.jpg' },
    { tag: '2023/10', imgSrc: '../../../assets/Vlog/vandiyur/Day - 10/22.jpg' },
    
]
selectedDayTag: string = ''; // Variable to store the selected day's tag

setSelectedDay(tag: string) {
  this.selectedDayTag = tag;
}

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
 
  
  isVideoTag(tag: string): boolean {
    const video = this.ytvvideo.find(item => item.tag === tag);
    return !!video;
  }

  getYoutubeVideoUrl(selectedDayTag: string): string {
    // Find the corresponding video URL based on the selectedDayTag
    const selectedVideo = this.ytvvideo.find((video) => video.tag === selectedDayTag);
  
    // Return the video URL
    return selectedVideo ? selectedVideo.imgSrc : '';
  }
  
  
}
