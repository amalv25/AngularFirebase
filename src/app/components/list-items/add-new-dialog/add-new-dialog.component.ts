import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators , EmailValidator, AbstractControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/directives/email-validator.directive';
import { ReqresAPIService } from 'src/app/Services/reqres-api.service';

@Component({
  selector: 'app-add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.css']
})
export class AddNewDialogComponent implements OnInit {

  @Output() addNewEvent = new EventEmitter<any>();

  public opened = false;
  profileForm!: FormGroup;
  
  constructor(private fb: FormBuilder,
    private reqApi :ReqresAPIService,
    private router:Router,
    ) { 
  }
  ngOnInit(): void {
    this. profileForm = this.fb.group({
      firstName: ['', Validators.required ],
      last_name: [''],
      email:['',emailValidator(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)],
      job:[''],
    });
  }
  get f()
{
    return this.profileForm.controls;
}
  public close() {
    this.opened = false;
    // this.router.navigate(['/list'])
  }

  public open() {
    this.opened = true;
  }
  onSubmit(form: FormGroup) {
    // this.reqApi.addUser(this.profileForm).then(
    //   (res)=>{
    //     alert('Added new Employee!');
    //     console.warn('added user=',res)
    //     this.addNewEvent.emit(null);
    //   })
    if(form.valid){
      console.log ( 'valid ', form.valid)
    }
    this.reqApi.addUser(this.profileForm).subscribe(
      (res)=>{
        alert('Added new Employee!');
        console.warn('added user=',res)
        this.addNewEvent.emit(null);
      })
    // this.router.navigate(['/list']);
    this.close();
    
  }

   nullValidator(control: AbstractControl): {[key: string]: any} | null {
      if (control.value && control.value.length == 0) {
        return { 'fieldInvalid': true };
      }
      return null;
    }
}

