import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/services/rider.service';

@Component({
  selector: 'app-view-riders',
  templateUrl: './view-riders.component.html',
  styleUrls: ['./view-riders.component.css']
})
export class ViewRidersComponent implements OnInit {

  constructor( private riderService: RiderService) { }

  private url:string = "http://localhost:3000/Riders"
  RidersList:any  = {};
  
  ngOnInit(){
    this.getAllCreatedRiders();
    
}

getAllCreatedRiders(){
  this.riderService.getRiders()
      .subscribe((res: any) => {
        console.log(JSON.stringify(res));
        this.RidersList=res;
      })
  
}

}
