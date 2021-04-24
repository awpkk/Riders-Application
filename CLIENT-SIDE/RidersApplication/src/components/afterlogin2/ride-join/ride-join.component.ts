import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { RideService } from 'src/services/ride.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { RiderService } from 'src/services/rider.service';

const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
@Component({
  selector: 'app-ride-join',
  templateUrl: './ride-join.component.html',
  styleUrls: ['./ride-join.component.css']
})
export class RideJoinComponent implements OnInit {
  message: string;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private rideService: RideService,
    public loginComponent: LoginComponent,
    private activatedroute: ActivatedRoute,
    private riderService:RiderService,
    private router: Router) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
    this.activatedroute.params.subscribe(data => {
      //console.log(data);
      this.email = data.email;
    })
    this.getAllCreatedRides();
  }

  private url: string = "http://localhost:3000/rides"
  RidesList: [];
  email: any;
  rider:any;

  ngOnInit() {
  
    this.findRiderByEmail();
  }

  getAllCreatedRides() {
    this.rideService.getRides()
      .subscribe((res: any) => {
        console.log("in ride join , our rides+++"+JSON.stringify(res));
        this.RidesList = res;
        console.log(this.isEmpty(this.RidesList));
        if(this.isEmpty(this.RidesList)){
          this.message="There are no rides available, You can also create one!";
        }else{
          this.message="";
        }
      })
  }
  enroll(ride: any) {
    console.log("in enroll +++" + this.email);
    console.log("in enroll ride++++" + JSON.stringify(ride))
    this.rideService.enrollRide(ride.id, this.email)
      .subscribe((res: any) => {
        console.log(res);
        this.RidesList = res;
      })
  }
  // goToHome() {
  //   this.router.navigate(['/afterlogin2/riderhome3/'+ this.email])
  // }
    goToJoin() {
      this.router.navigate(['/afterlogin2/riderhome3/'+this.email+'/ridejoin2/'+this.email])
      this.getAllCreatedRides();
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

findRiderByEmail(){
this.riderService.findRider2(this.email)
.subscribe((res: any) => {
  console.log(res);
  this.rider = res;
  })
}
}