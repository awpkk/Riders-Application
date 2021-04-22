import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/services/rider.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  email: any;
  name: any;

  ngOnInit(): void { }
  constructor(
    private activatedroute: ActivatedRoute,
    public riderService: RiderService,
    private router: Router
  ) {
    //Get email
    this.activatedroute.params.subscribe(data => {
      this.email = data.email;
    })
    //Get name
    this.riderService.findRider2(this.email)
      .subscribe((res: any) => {
        this.name = res.name;
        console.log("in name finder++" + res)
      })
  }
  joinride() {
    this.router.navigate(['/afterlogin2/riderhome3/' + this.email + '/ridejoin2/' + this.email])
  }
  enrollRide() {
    this.router.navigate(['/afterlogin2/riderhome3/' + this.email + '/enrolledrides2/' + this.email])
  }
  createride() {
    this.router.navigate(['/afterlogin2/riderhome3/' + this.email + '/ridecreate2/' + this.email])
  }
  purchase() {
    this.router.navigate(['/afterlogin2/riderhome3/' + this.email + '/purchaseitem2/' + this.email])
  }
  loadhome() {
    this.router.navigate(['/afterlogin2/riderhome3/' + this.email + '/rhomeimages/' + this.email])
  }
}