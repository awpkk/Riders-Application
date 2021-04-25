import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RideService } from 'src/services/ride.service';
import { RiderService } from 'src/services/rider.service';

@Component({
  selector: 'app-enrolled-rides',
  templateUrl: './enrolled-rides.component.html',
  styleUrls: ['./enrolled-rides.component.css']
})
export class EnrolledRidesComponent implements OnInit {

  email: any;
  message: string;

  constructor(
    private riderService: RiderService, 
    private activatedroute: ActivatedRoute, 
    private rideService: RideService,
    private router: Router
    ) {
    this.activatedroute.params.subscribe(data => {
      this.email = data.email;
      console.log(this.email);
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
        console.log(res);
        this.EnrolledRidesList = res;
        console.log("This is enrolled rides list++++" + this.EnrolledRidesList);
        if (this.isEmpty(this.EnrolledRidesList)) {
          this.message = "You have not Enrolled in any ride yet, You may Join a ride!";
        } else {
          this.message = "";
        }
      })
  }
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  checklistempty() {
    return !this.isEmpty(this.EnrolledRidesList);
  }
  cancelRide(id){
    this.rideService.removeRider(id, this.email)
    .subscribe((res:any)=>{
      console.log("Delete response = "+res);
      this.router.navigate(['/afterlogin2/riderhome3/' + this.email + '/enrolledrides2/' + this.email])
    })
  }
}
