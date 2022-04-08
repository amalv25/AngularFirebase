import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetail :any;
  id!: number;
  constructor(
    private route:ActivatedRoute,
    private fireAuth:FirebaseAuthService
  ) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        console.log(this.id);
        this.fireAuth.getEmployeeDetails(this.id)
    console.log('Employee Details'+this.employeeDetail)
        // let col = documentId(this.firestore,'amal-items');
        // this.employeeDetail=getDoc(col,)
      }
    )
    
  }

}
