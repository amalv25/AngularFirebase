import { Component, OnInit} from '@angular/core';
import { FirebaseAuthService } from 'src/app/Services/firebase-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  // public readonly user: Observable<User | null> = EMPTY;
  returnUrl: string | undefined;

  constructor(
  private fireAuth:FirebaseAuthService,
  private route: ActivatedRoute,
  private router:Router
  ) {
    
  }

  ngOnInit(): void { 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.fireAuth.user.subscribe(isLoggedIn=>{
      if(isLoggedIn)
         this.router.navigate([this.returnUrl]);
    })
  }

  async login() {
    this.fireAuth.login(); 
     
  }

}
