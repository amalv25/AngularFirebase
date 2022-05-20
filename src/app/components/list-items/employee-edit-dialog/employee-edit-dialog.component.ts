import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReqresAPIService } from 'src/app/Services/reqres-api.service';

@Component({
  selector: 'app-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.css']
})
export class EmployeeEditDialogComponent implements OnInit {
  profileForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: [''],
    email:['']
  });
  employeeDetail : any;
  id!:number;

  public opened = false;
  constructor(
    private route : ActivatedRoute,
    private fb : FormBuilder,
    private reqApi : ReqresAPIService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id']-7;
        // this.reqApi.getUsers().then(
        //   (data)=>{
        //     console.log('list items = ', data[this.id])
        //     this.employeeDetail=data[this.id]
        //   });
        this.reqApi.getUsers().subscribe(
          (record)=>{
            this.employeeDetail=record.data[this.id];
            console.log(this.employeeDetail)
          })
      });
  }
  onSubmit(){
    this.reqApi.updateUser(this.profileForm).then(
      (data)=>{
       // this.employeeDetail=data;
       console.log('updated data',data);
        alert('Update success!');
      //  this.router.navigate(['..'],{relativeTo:this.route});
      }
    )
     this.close();
   }
  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

}
