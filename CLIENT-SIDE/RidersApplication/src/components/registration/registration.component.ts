import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 myForm:FormGroup;
  constructor() {
     this.myForm = new FormGroup({
     email: new FormControl("demo@gmail.com",[Validators.required,
      Validators.pattern("^[A-Za-z0-9._-]+@[a-z0-9.]+\.[a-z]{2,6}$")]),
    password: new FormControl("",[Validators.required, Validators.minLength(8)]),
    name: new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z ]{2,30}$")]),
    phone_number: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(11)])
   
    });
    }
     getRegister() {
       console.log(this.myForm);
     console.log("send request");
  }
  
   }





