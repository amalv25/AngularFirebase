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
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
// import {Ang} from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private readonly userDisposable: Subscription|undefined;
  public readonly user: Observable<User | null> = EMPTY;

  showLoginButton = false;
  showLogoutButton = false;
  item$: Observable<any> ;
  docId: Promise<void> | undefined;
  // constructor(firestore: Firestore,private fireAuth:FirebaseAuthService) {
  //   let col:any = collection(firestore, 'amal-items');
  //   this.item$ = collectionData(col);
  //   // this.user=this.fireAuth.loggedInUser();
  //   console.log(this.item$);
  constructor(@Optional() private auth: Auth,
  firestore: Firestore
  ) {
    let col : any= collection(firestore,'amal-items').withConverter<any>({
      fromFirestore: snapshot =>{
        const record=snapshot.data();
        const id= snapshot.id;
        
        return {record,id};
      },
      toFirestore : (it :any)=>it,
    });

    this.item$ = collectionData(col);
    
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
  async getEmployeeDetails(id:number){
    this.docId= this.item$.forEach( doc=>{
        console.log(doc[id]);
        return doc[id];
       })
      
  }
}
