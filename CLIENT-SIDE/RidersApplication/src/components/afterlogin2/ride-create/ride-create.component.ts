import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RideService } from 'src/services/ride.service';

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
  endDate: { year: number; month: number; day: number; };
  

  //private url: string = "http://localhost:8787/rides/create"
  //ridersList: any = {};

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

  constructor(private router: Router, private modalService: NgbModal, private rideService: RideService, private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data => {
      this.email = data.email;
    })
  }
  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  //public minDate: Object = new Date(this.currentYear, this.currentMonth, this.currentDay);
 
  ngOnInit(): void {
    this.rideForm = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      source: new FormControl("", Validators.required),
      destination: new FormControl("", Validators.required),
      startdate: new FormControl("", Validators.required),
      enddate: new FormControl("", Validators.required)
    });
    this.maxday=this.rideForm.value.startdate.day;
    this.minDate={"year":this.currentYear,"month":this.currentMonth+1,"day":this.currentDay};
    //this.endDate={"year":this.currentYear,"month":this.currentMonth+1, "day":this.maxday};
  
  }

  create() {
    this.rideService.saveRide(this.rideForm.value)
      .subscribe((res: any) => {
        console.log(res);
        console.log("in reide create and create++++"+this.email)
        this.router.navigate(['/afterlogin2/riderhome3/'+this.email])
      })

  }
 
}