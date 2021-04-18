import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { mainModule } from 'node:process';
import { RiderService } from 'src/services/rider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;
  errorMessage = "";

  constructor(private riderService: RiderService, private router: Router) {
    this.myForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9._-]+@[a-z0-9.]+\.[a-z]{2,6}$")
      ]),
      // password: new FormControl("", [
      //   Validators.required,
      //   Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")
      // ])
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  getLogin() {
    this.riderService.findRider(this.myForm.value.email)
      .subscribe((res: any) => {

        //Password validation
        var passFromDB = res.password;
        var passFromForm = this.myForm.value.password;
        // var emailFromAdmin = "admin@mail.com";
        // var passFromAdmin = "admin@1234";
        var emailFromForm = this.myForm.value.email;

        console.log("Password from DB = " + passFromDB)
        console.log("Password from Form = " + passFromForm)

        if (passFromForm == "admin@1234" && emailFromForm == "admin@mail.in") {
          console.log("Login successful!")
          this.router.navigate(['/admin-root']);
        }
        else if (passFromDB == passFromForm) {
          console.log("Login successful!")
          this.router.navigate(['/riderhome', this.myForm.value.email])
        } else if (passFromDB != passFromForm) {
          console.log("Login unsucessful!")
          this.router.navigate(['/login'])
          this.errorMessage = "Invalid credentials!";
        } else {
          this.errorMessage = "Invalid credentials!";
        }
      })
  }

}
