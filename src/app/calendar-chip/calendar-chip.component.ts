import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-chip',
  templateUrl: './calendar-chip.component.html',
  styleUrls: ['./calendar-chip.component.css']
})
export class CalendarChipComponent implements OnInit {

  constructor() {}

@Input()
content:any;  
  ngOnInit() {
  }

}
