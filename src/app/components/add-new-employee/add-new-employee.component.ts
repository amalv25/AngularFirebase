import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqresAPIService } from 'src/app/Services/reqres-api.service';
@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  
  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   designation:[''],
    // dateOfjoining:[""],
    // age:[''],
    // address: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: ['']
    // })
  // });
  profileForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: [''],
    email:[''],
    job:[''],
  });
  
  constructor(private fb: FormBuilder,
    // private firestore: Firestore,
    private reqApi :ReqresAPIService,
    private router:Router,
    ) { 
  }

  ngOnInit(): void {
  }
  onSubmit() {
    // let col:any = collection(this.firestore, 'amal-items');
    // addDoc(col,this.profileForm.value);
    // console.warn(this.profileForm.value);
    // this.reqApi.addUser(this.profileForm).then(
    //   (res)=>{
    //     alert('Added new Employee!');
    //     console.warn('added user=',res)
    //   }
    // )
    this.reqApi.addUser(this.profileForm).subscribe(
      (res)=>{
            alert('Added new Employee!');
            console.warn('added user=',res)
          }
    )
    this.router.navigate(['/list'])
  }
}