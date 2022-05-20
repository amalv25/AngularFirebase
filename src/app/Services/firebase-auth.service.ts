import { Injectable, Optional } from '@angular/core';
import {
  Auth, 
  authState,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup
} from '@angular/fire/auth';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { traceUntilFirst } from '@angular/fire/performance';
import { collection,
  collectionData,
  doc,
  DocumentData,
  DocumentSnapshot,
  Firestore,
  getDoc,
  getDocs,
  QuerySnapshot 
} from '@angular/fire/firestore';
// import {Ang} from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private readonly userDisposable: Subscription|undefined;
  public readonly user: Observable<User | null> = EMPTY;
  // private selectedRecord: Subscription|undefined;
  // private selectedRecord : Promise<DocumentSnapshot<DocumentData>> | undefined;

  showLoginButton = false;
  showLogoutButton = false;
  // item$: Observable<any> ;
  // empitem$: Promise<QuerySnapshot<unknown>> ;
  // employeeRecd$ :<Observable<any>;
  docId: Promise<void> | undefined;
  // constructor(firestore: Firestore,private fireAuth:FirebaseAuthService) {
  //   let col:any = collection(firestore, 'amal-items');
  //   this.item$ = collectionData(col);
  //   // this.user=this.fireAuth.loggedInUser();
  //   console.log(this.item$);
  constructor(@Optional() private auth: Auth,
  private firestore: Firestore
  ) {
    let col:any = collection(firestore, 'amal-items');
    // this.item$ = collectionData(col);
    // this.empitem$=getDocs(col);
    if (auth) {
      this.user = authState(this.auth);
      this.userDisposable = authState(this.auth).pipe(
        traceUntilFirst('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        this.showLoginButton = !isLoggedIn;
        this.showLogoutButton = isLoggedIn;
        // console.log('is logged in '+isLoggedIn);
        // console.log('is not logged in '+!isLoggedIn);
      });

    }
    // console.log('show login button'+this.showLoginButton);
    // console.log('show logout button'+this.showLogoutButton)
  }

  loggedInUser(){
    return this.user;
  }
  isLoggedIn(){
    if(this.showLogoutButton){
      return true;
    }
    
    else return false;
  }
  async login() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  // async loginAnonymously() {
  //   return await signInAnonymously(this.auth);
  // }

  async logout() {
    console.log("logging out");
    return await signOut(this.auth);
  }

  // async getEmployeeDetails(id:number){
  //   let docRef = doc(this.firestore,'amal-items/'+`${id}`)
  //   this.selectedRecord= getDoc(docRef);
  //   console.log(docRef);
  //   console.log('selected record'+(await this.selectedRecord).data());
  //   // this.docId= this.item$.forEach( doc=>{
  //   //     console.log(doc[id]);
  //   //     return doc[id];
  //   //    })
      
  // }
}
