import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup;


  constructor() {
    this.myForm = new FormGroup({

      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9._-]+@[a-z0-9.]+\.[a-z]{2,6}$")
      ]),
      password: new FormControl("",[
        Validators.required,
        Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")
      ]) 
    });

  }


  getRegister() {

    console.log(this.myForm)
    console.log("send request");
  }
}
