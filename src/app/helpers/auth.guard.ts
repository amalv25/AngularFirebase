import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../Services/firebase-auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private fireAuth:FirebaseAuthService,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>| Promise<boolean>| boolean {
        const currentUser =this.fireAuth.isLoggedIn();
        // this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        else{ // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;}
        
    }
}