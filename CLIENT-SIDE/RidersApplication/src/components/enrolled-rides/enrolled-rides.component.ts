import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiderService } from 'src/services/rider.service';

@Component({
  selector: 'app-enrolled-rides',
  templateUrl: './enrolled-rides.component.html',
  styleUrls: ['./enrolled-rides.component.css']
})
export class EnrolledRidesComponent implements OnInit {

  email: any;

  constructor(private riderService: RiderService, private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data => {
      this.email = data.email;
    })
  }

  //  private url:string = "http://localhost:3000/EnrolledRides"

  EnrolledRidesList: any = {};

  ngOnInit() {
    //  fetch(this.url, {
    //    method: "get"
    //  })
    //  .then((response:any)=>{
    //    return response.json();
    //  })
    //  .then((data:any)=>{
    //    console.log(data);
    //    this.EnrolledRidesList = data;
    //  });
    this.getEnrolledRides();
  }
  getEnrolledRides() {
    this.riderService.getRides(this.email)
      .subscribe((res: any) => {
        console.log(JSON.stringify(res));
        this.EnrolledRidesList = res;
      })
  }
}
