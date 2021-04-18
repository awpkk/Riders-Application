import { RideService } from './../../../services/ride.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rides',
  templateUrl: './view-rides.component.html',
  styleUrls: ['./view-rides.component.css']
})
export class ViewRidesComponent implements OnInit {

  constructor( private rideService: RideService) { }

  private url:string = "http://localhost:3000/Rides"
  RidesList:any  = {};
  
  ngOnInit(){
    this.getAllCreatedRides();
    
}

getAllCreatedRides(){
  this.rideService.getRides()
      .subscribe((res: any) => {
        console.log(JSON.stringify(res));
        this.RidesList=res;
      })
  
}

}
