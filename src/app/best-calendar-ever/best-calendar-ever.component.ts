import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-calendar-ever',
  templateUrl: './best-calendar-ever.component.html',
  styleUrls: ['./best-calendar-ever.component.css']
})
export class BestCalendarEverComponent implements OnInit {

  constructor() {}

  eventList: any = ['','睡覺','吃飯','洗澡','打屁','打電動','翹課','跟老闆打牌','穆董請吃飯','阿振肉包到貨','阿罵生日'];
  date: number;
  ngOnInit() {
    this.date = 0;
  }

  

  setDate() {
    this.date++;
    return this.date; 
  }
  randomEvent() {
    let b: number;
    if (Math.random() > 0.5) {
      b = Math.floor((Math.random() * 11));
      return this.eventList[b];
    }
    return '';
  }  
}
