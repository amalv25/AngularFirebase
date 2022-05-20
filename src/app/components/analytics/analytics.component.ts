import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  type!:any;
  constructor() { }

  ngOnInit(): void {
    this.type="bar"
  }
  typeChange(argType:any){
    this.type=argType
  }
}
