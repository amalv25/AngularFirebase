import { Component, OnInit } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { traceUntilFirst } from '@angular/fire/performance';
import { EMPTY, map, Observable, Subscription } from 'rxjs';
import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private readonly userDisposable: Subscription|undefined;
  public readonly user: Observable<User | null> = EMPTY;

  public opened = false;
  showLoginButton = false;
  showLogoutButton = false;
  constructor(
    private fireAuth:FirebaseAuthService,
    private auth :Auth,
    
    ) {
      if(auth){
        // this.user = authState(this.auth);
      this.userDisposable = authState(this.auth).pipe(
        traceUntilFirst('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        this.showLoginButton = !isLoggedIn;
        this.showLogoutButton = isLoggedIn;
      });
      }
     }
  collapsed=true;
  
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  login(){
    this.fireAuth.login();
  }
  logout(){
    this.fireAuth.logout();
    this.close();
  }
  public close() {
    this.opened = false;
  }
  public open() {
    this.opened = true;
  }
}
