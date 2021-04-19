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

  ngOnInit(): void {
    this.rideForm = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      source: new FormControl("", Validators.required),
      destination: new FormControl("", Validators.required),
      startdate: new FormControl("", Validators.required),
      enddate: new FormControl("", Validators.required)
    });
  }

  create() {
    this.rideService.saveRide(this.rideForm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/riderhome', this.email])
      })
  }
}