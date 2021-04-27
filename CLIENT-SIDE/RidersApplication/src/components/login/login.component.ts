import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
//import { mainModule } from 'node:process';
import { RiderService } from 'src/services/rider.service';
import { NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;
  errorMessage: String;
  constructor(private riderService: RiderService, private router: Router) {
    this.myForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9._-]+@[a-z0-9.]+\.[a-z]{2,6}$")
      ]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
  }
  getLogin() {
    this.riderService.findRider(this.myForm.value.email, this.myForm.value.password)
      .subscribe((res: any) => {
          // console.log(res);
        if (res == 1) {
          this.errorMessage = "You do not have an account";
        } else if (res == 2) {
          //this.router.navigate(['/afterlogin2/riderhome3/'+ this.myForm.value.email]);
          this.router.navigate(['/afterlogin2/riderhome3/' + this.myForm.value.email + '/rhomeimages/' + this.myForm.value.email])
        } else if (res == 3) {
          this.errorMessage = "Wrong Password";
        } else if (res == 4) {
          this.router.navigate(['/admin/adminroot']);
        }
      })
  }
}
