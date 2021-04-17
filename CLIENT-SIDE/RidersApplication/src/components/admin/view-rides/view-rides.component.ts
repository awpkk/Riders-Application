import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rides',
  templateUrl: './view-rides.component.html',
  styleUrls: ['./view-rides.component.css']
})
export class ViewRidesComponent implements OnInit {

  constructor() { }

  private url:string = "http://localhost:3000/Rides"
  RidesList:any  = {};
  ngOnInit(){
    fetch(this.url, {
      method: "get"
    })
    .then((response:any)=>{
      return response.json();
    })
    .then((data:any)=>{
      console.log(data);
      this.RidesList = data;
    });
  }

}
