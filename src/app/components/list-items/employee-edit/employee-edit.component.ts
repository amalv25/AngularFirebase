import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReqresAPIService } from 'src/app/Services/reqres-api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  profileForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: [''],
    email:['']
  });
  employeeDetail : any;
  id!:number;
  constructor(
    private route : ActivatedRoute,
    private fb : FormBuilder,
    private reqApi : ReqresAPIService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        // this.reqApi.getUsers().then(
        //   (data)=>{
        //     console.log('list items = ', data[this.id])
        //     this.employeeDetail=data[this.id]
        //   });
      });
  }
  onSubmit(){
   this.reqApi.updateUser(this.profileForm).then(
     (data)=>{
      // this.employeeDetail=data;
      console.log('updated data',data);

       alert('Update success!');
      this.router.navigate(['..'],{relativeTo:this.route});
     }
   )
    
  }
}
