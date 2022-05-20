import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewComponent } from './add-new/add-new.component';

@Component({
  selector: 'app-employee-names',
  templateUrl: './employee-names.component.html',
  styleUrls: ['./employee-names.component.css']
})
export class EmployeeNamesComponent implements OnInit {

  @ViewChild (AddNewComponent) addNew! : AddNewComponent;
  constructor() { }
  public gridData: any = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages'
        }
    },
    {
       /*...*/
    }
];
  ngOnInit(): void {
  }
  onAdd(){
    this.addNew.opened=true;
  }

}
