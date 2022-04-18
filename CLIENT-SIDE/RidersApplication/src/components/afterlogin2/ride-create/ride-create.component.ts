import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RideService } from 'src/services/ride.service';
import { RiderService } from 'src/services/rider.service';

@Component({
  selector: 'app-ride-create',
  templateUrl: './ride-create.component.html',
  styleUrls: ['./ride-create.component.css']
})
export class RideCreateComponent implements OnInit {
  rideForm: FormGroup;
  model: NgbDateStruct;
  model1: NgbDateStruct;
  closeResult = '';
  email: any;
  maxday: number;
  minDate: { year: number; month: number; day: number; };
  // endDate: { year: number; month: number; day: number; };
  tripEndDate: { year: number; month: number; day: number; }
  rider: any;
  creatorName1: String;
  endDate: { year: number; month: number; day: number; };
  ourstartdate: string;
  ourenddate: string;
  dateStart: Date;
  dateEnd: Date;
  diffTime: number;
  yearDifference: number;
  monthDifference: number;
  dayDifference: number;
  sDate: any;
  isCheck: boolean;
  message: string;
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
  constructor(private router: Router, private modalService: NgbModal, private riderService: RiderService, private rideService: RideService, private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data => {
      this.email = data.email;
    })
  }
  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  ngOnInit(): void {
    this.rideForm = new FormGroup({
      creatorName: new FormControl(this.creatorName1),
      title: new FormControl("", [Validators.required, Validators.pattern("^(?! )[a-zA-Z0-9(?! )]*$")]),
      description: new FormControl("", [Validators.required, Validators.pattern("^(?! )[a-zA-Z0-9(?! )]*$")]),
      source: new FormControl("", [Validators.required, Validators.pattern("^(?! )[a-zA-Z0-9 _@./#,&+-]*$")]),
      destination: new FormControl("", [Validators.required, Validators.pattern("^(?! )[a-zA-Z0-9 _@./#,&+-]*$")]),
      maxRiders: new FormControl("", [Validators.required, Validators.min(2)]),
      startdate: new FormControl("", Validators.required),
      enddate: new FormControl("", Validators.required)
    });
    this.findRiderByEmail();
    this.maxday = this.rideForm.value.startdate.day;
    this.minDate = { "year": this.currentYear, "month": this.currentMonth + 1, "day": this.currentDay };
    this.minDate = { "year": this.currentYear, "month": this.currentMonth + 1, "day": this.currentDay };
  }
  create() {
    this.rideForm.value.creatorName = this.creatorName1;
    this.rideService.saveRide(this.rideForm.value)
      .subscribe((res: any) => {
        this.sDate = this.rideForm.value.startdate;
        this.router.navigate(['/afterlogin2/riderhome3/' + this.email + '/rhomeimages/' + this.email])
      })
  }
  findRiderByEmail() {
    this.riderService.findRider2(this.email)
      .subscribe((res: any) => {
        this.rider = res;
        this.creatorName1 = res.name;
      })
  }
  dateCheck() {
    this.message = "";
    this.yearDifference = this.rideForm.value.enddate.year - this.rideForm.value.startdate.year;
    if (this.yearDifference < 0) {
      this.isCheck = false;
      this.message = "Previous year entered! Please enter valid end date."
    }
    else if (this.yearDifference > 0) {
      this.isCheck = true;
      this.message = ""
    }
    else if (this.yearDifference == 0) {
      this.monthDifference = this.rideForm.value.enddate.month - this.rideForm.value.startdate.month;
      if (this.monthDifference < 0) {
        this.isCheck = false;
        this.message = "Previous month entered! Please enter valid end date."
      }
      else if (this.monthDifference > 0) {
        this.isCheck = true;
        this.message = ""
      }
      else if (this.monthDifference == 0) {
        this.dayDifference = this.rideForm.value.enddate.day - this.rideForm.value.startdate.day;
        if (this.dayDifference < 0) {
          this.isCheck = false;
          this.message = "Previous day entered! Please enter valid end date."
        }
        else if (this.dayDifference > 0) {
          this.isCheck = true;
          this.message = ""
        }
      }
    }
    return !this.isCheck;
  }
}