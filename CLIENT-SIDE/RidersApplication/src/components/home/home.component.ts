import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/services/rider.service';
import { ActivatedRoute, Router } from '@angular/router';

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
      //console.log(data);
      this.email = data.email;
    })
    //Get name
    this.riderService.findRider(this.email)
      .subscribe((res: any) => {
        this.name = res.name;
      })
  }
  joinride() {
    this.router.navigate(['/ride-join', this.email])
  }
  enrollRide() {
    this.router.navigate(['/enrolled-rides', this.email])
  }
  createride() {
    this.router.navigate(['/ride-create', this.email])
  }
}