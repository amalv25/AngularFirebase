import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';
import { ReqresAPIService } from 'src/app/Services/reqres-api.service';
import { EmployeeEditDialogComponent } from '../employee-edit-dialog/employee-edit-dialog.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @ViewChild(EmployeeEditDialogComponent) childEdit! :EmployeeEditDialogComponent
  employeeDetail :any;
  id!: number;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private reqApi : ReqresAPIService
  ) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        console.log(this.id);
        // this.reqApi.getUsers().then(
        //   (data)=>{
        //     // console.log('list items = ', data[this.id])
        //     this.employeeDetail=data[this.id]
        //   });
        
        this.reqApi.getUsers().subscribe(
          (record)=>{
            if(this.id>6){
              this.employeeDetail=record.data[this.id-7];
            } else {
              this.employeeDetail=record.data[this.id];
            }
            
          })
      });
  }
  onEdit(){
    // this.router.navigate(['edit'],{relativeTo:this.route});
    this.childEdit.opened=true;
  }
  onDelete(){
    if(confirm('Do you want to delete the record?')){
      this.reqApi.deleteUser(this.employeeDetail).then(
        (response)=>{
          alert('Record Deleted!');
          this.router.navigate(['..'],{relativeTo:this.route});
        }
      )
    }
  }
}
