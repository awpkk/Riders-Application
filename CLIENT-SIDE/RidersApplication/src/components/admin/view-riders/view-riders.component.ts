import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-riders',
  templateUrl: './view-riders.component.html',
  styleUrls: ['./view-riders.component.css']
})
export class ViewRidersComponent implements OnInit {

  constructor() { }

  private url:string = "http://localhost:3000/Riders"
  RidersList:any  = {};
  ngOnInit(){
    fetch(this.url, {
      method: "get"
    })
    .then((response:any)=>{
      return response.json();
    })
    .then((data:any)=>{
      console.log(data);
      this.RidersList = data;
    });
  }
}