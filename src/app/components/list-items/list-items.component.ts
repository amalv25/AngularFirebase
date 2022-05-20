import { Component, OnInit, ViewChild } from '@angular/core';
import { ListViewDataResult, PageChangeEvent } from '@progress/kendo-angular-listview';
import { finalize } from 'rxjs/operators';
// import { User } from '@angular/fire/auth';
// import { 
//    Firestore,
//    QuerySnapshot, 
//    QueryDocumentSnapshot 
//   } from '@angular/fire/firestore';
// import { ActivatedRoute, Router } from '@angular/router';
// import { EMPTY, Observable } from 'rxjs';
// import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';
import { ReqresAPIService } from 'src/app/Services/reqres-api.service';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog.component';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
   @ViewChild(AddNewDialogComponent) childAddNew! : AddNewDialogComponent

  // item$ : any[]=[];
  item$! :ListViewDataResult;
  scrollItem!:ListViewDataResult;
  public loading = false;
  public pageSize = 3;
  public skip = 0;

  constructor(
    private reqApi : ReqresAPIService,
    // private router:Router,
    // private route :ActivatedRoute,
   
    ){

  }
  ngOnInit(): void {
    this.loadData();
    this.fetchData();
  }
  public get showPager(): boolean {
    return this.item$ && this.item$.total > 0;

  }
  loadData(){
    
    this.loading = true;
    this.reqApi.getUsers({ skip: this.skip, take: this.pageSize })
    // .pipe(finalize(() => this.loading = false))
    .subscribe(
      (record)=>{
        console.log('list items = ', record.data)
        this.item$=record;
        this.loading = false
      }
    )

  }
  fetchData(){
    this.reqApi.getScrollList().subscribe(
      data=>{
        this.scrollItem=data;
        console.log(this.scrollItem)
      }
    )
  }
  public handlePageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;

    this.loadData();
}
  onAddEmployee(){
    // this.router.navigate(['addNewEmployee'],{relativeTo:this.route})
    this.childAddNew.opened=true;
  }
}
