import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RiderService } from 'src/services/rider.service';
import { getNameOfDeclaration } from 'typescript';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;
  closeResult = '';
  constructor(private riderService: RiderService, private router: Router, private modalService: NgbModal) {
  }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl("", [Validators.required,
      Validators.pattern("^(?! )[A-Za-z0-9._-]+@[a-z0-9.]+\.[a-z]{2,6}$")]),
<<<<<<< HEAD
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?! )")]),
=======

      ///^[ A-Za-z0-9_@./#&+-]*$/

      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?! )[ A-Za-z0-9_@./#&+-]*$")]),
      // password: new FormControl("", [
      //   Validators.required,
      //   Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")
      // ]),

>>>>>>> e1a25e121b12dcf074834b079eefe1fe42886f73
      name: new FormControl("", [Validators.required, Validators.pattern("^(?! )[a-zA-Z ]{2,30}$")]),
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern("^(?! )[0-9]{10,14}$")]),
      gender: new FormControl(""),
      vehicleType: new FormControl(""),
      vehicleNumber: new FormControl("", Validators.pattern("^(?! )[a-zA-Z ]{2,30}$")),
      vehicleModel: new FormControl("", Validators.pattern("^(?! )[a-zA-Z ]{2,30}$")),
      address: new FormControl("", Validators.pattern("^(?! )[a-zA-Z ]{2,30}$"))
    });
  }
  getRegister() {
    this.riderService.saveRider(this.myForm.value)
      .subscribe((res: any) => {
        // console.log(res);
        this.router.navigate(["home"]);
      })
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}