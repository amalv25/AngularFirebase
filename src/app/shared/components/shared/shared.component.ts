import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  @Input() listType!: string;
  isEmployeeList!: boolean;
  constructor() { }

  ngOnInit(): void {
    if(this.listType=='Employee List'){
      this.isEmployeeList=true
    } else {
      this.isEmployeeList=false
    }
  }

}
