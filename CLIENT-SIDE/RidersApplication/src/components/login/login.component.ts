import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { RiderService } from 'src/services/rider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;
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
        if(passFromDB==passFromForm){
          console.log("Login successful!")
        }else{
          console.log("Login unsucessful!")
        }
        //Open login homepage
        this.router.navigate(['/riderhome', this.myForm.value.email])
      })
  }
}