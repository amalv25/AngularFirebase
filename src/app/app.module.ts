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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './components/list-items/employee-details/employee-details.component';
import { EmployeeRecordComponent } from './components/list-items/employee-record/employee-record.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeEditComponent } from './components/list-items/employee-edit/employee-edit.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeEditDialogComponent } from './components/list-items/employee-edit-dialog/employee-edit-dialog.component';
import { AddNewDialogComponent } from './components/list-items/add-new-dialog/add-new-dialog.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FetchPipe } from './pipes/fetch.pipe';
import { EmployeeNamesComponent } from './components/employee-names/employee-names.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { EmptyValidatorDirective } from './directives/empty-validator.directive';
import { AddNewComponent } from './components/employee-names/add-new/add-new.component';
import { SharedModule } from './shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { AnalyticsComponent } from './components/analytics/analytics.component';







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
    EmployeeEditComponent,
    AddNewDialogComponent,
    EmployeeEditDialogComponent,
    HighlightDirective,
    FetchPipe,
    EmployeeNamesComponent,
    EmailValidatorDirective,
    EmptyValidatorDirective,
    AddNewComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    FormsModule,
    DialogsModule,
    BrowserAnimationsModule,
    SharedModule,
    GridModule,
    ListViewModule,
    ChartsModule
  ],
  providers: [
    AuthGuard,
    FirebaseAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
