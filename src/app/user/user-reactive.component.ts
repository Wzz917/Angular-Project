import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-user-reactive',
  templateUrl: './user-reactive.component.html',
  styleUrls: ['./user-reactive.component.css']
})
export class UserReactiveComponent implements OnInit {

  // userForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(""),
  //   phone: new FormControl(''),
  //   email: new FormControl('')
  // });
  // firstName = new FormControl(''); 

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: [''],
    phone: ['', [this.validatePhoneNumber]],
    email: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  saveUser() {
    console.log(this.userForm.value);
  }

  validatePhoneNumber(Control: AbstractControl) : {[key:string]:any} | null  {
    if (Control.value && Control.value.length != 10) {
      return {"Invalid phone number":false};
    }
    return null;
  }
}
