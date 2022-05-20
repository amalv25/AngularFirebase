import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  public opened = false;
  designations = ['Associate SE', 'Software Engg', 'Project Manager'];
  employee = {name: '', email: '', designation: this.designations[0]};
  constructor() { }

  ngOnInit(): void {
  }
  public close() {
    this.opened = false;
  }

}
