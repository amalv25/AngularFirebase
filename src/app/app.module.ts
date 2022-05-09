import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { LoginComponent } from './components/login/login.component';
import { RoutingModule } from './routing/routing.module';
import { AuthGuard } from './helpers/auth.guard';
import { FirebaseAuthService } from './Services/firebase-auth.service';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './components/list-items/employee-details/employee-details.component';
import { EmployeeRecordComponent } from './components/list-items/employee-record/employee-record.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AddNewEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeRecordComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    AuthGuard,
    FirebaseAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
