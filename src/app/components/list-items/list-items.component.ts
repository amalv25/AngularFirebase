import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Firestore, collectionData, collection, documentId } from '@angular/fire/firestore';
import { EMPTY, Observable } from 'rxjs';
import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  // public readonly user: Observable<User | null> = EMPTY;

  docId: any;
  docRef:any;

  item$: Observable<any>;
  constructor(private fireAuth:FirebaseAuthService){
    this.item$=fireAuth.item$;
  }
  // constructor(firestore: Firestore,private fireAuth:FirebaseAuthService) {
  //   let col:any = collection(firestore, 'amal-items');
  //   this.item$ = collectionData(col);
  //   // this.user=this.fireAuth.loggedInUser();
  //   console.log(this.item$);
    
  //  this.docId= this.item$.forEach( doc=>{
  //   // this.docId=documentId();
  //   console.log(doc[0])
  //  }
    
  //  )
  //  console.log(this.docId)
  // }

  ngOnInit(): void {
    
  }

}
