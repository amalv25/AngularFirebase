import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public opened = false;
  constructor() { }

  ngOnInit(): void {
  }
 

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }
}
