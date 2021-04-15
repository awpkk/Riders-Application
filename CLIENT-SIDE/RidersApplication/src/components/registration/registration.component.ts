import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RiderService } from 'src/services/rider.service';
import { getNameOfDeclaration } from 'typescript';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;

  constructor(private riderService: RiderService, private router: Router) {
    
  }
  ngOnInit():void{
    this.myForm = new FormGroup({
      email: new FormControl("", [Validators.required,
      Validators.pattern("^[A-Za-z0-9._-]+@[a-z0-9.]+\.[a-z]{2,6}$")]),

      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      // password: new FormControl("", [
      //   Validators.required,
      //   Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")
      // ]),

      name: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]{2,30}$")]),
      phoneNumber: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
      gender: new FormControl(""),
      vehicleType: new FormControl(""),
      vehicleNumber: new FormControl(""),
      vehicleModel: new FormControl(""),
      address: new FormControl("")
    });
  }
  getRegister() {
    this.riderService.saveRider(this.myForm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(["home"]);
      })
  }
}