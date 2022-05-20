import { Component, Input, OnInit } from '@angular/core';
import { QuerySnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-employee-record',
  templateUrl: './employee-record.component.html',
  styleUrls: ['./employee-record.component.css']
})
export class EmployeeRecordComponent implements OnInit {

  constructor() { }
  @Input() employee : any;
  // @Input() employee : QuerySnapshot<unknown> | undefined;
  @Input() index : number | undefined;
  ngOnInit(): void {
  }

}
