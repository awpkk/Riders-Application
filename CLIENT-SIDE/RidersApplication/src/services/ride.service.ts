import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private data: any[] = [];

  // public set rides(rides){
  //   this.data = rides;
  // }
  // public get rides(){
  //   return this.data;
  // }

  private host: string = "http://localhost:8787";

  constructor(private http: HttpClient) { }

  getRides() {
    return this.http.get(`${this.host}/rides/all`);
  }
  saveRide(rides: any) {
    //var a = JSON.stringify(rides)
    let ourstartdate: any;
    let ourenddate: any;


    ourstartdate = rides.startdate.year + "-" + rides.startdate.month + "-" + rides.startdate.day
    ourenddate = rides.enddate.year + "-" + rides.enddate.month + "-" + rides.enddate.day
    console.log(ourstartdate)
    console.log(ourenddate)

    rides.remove = function (startdate) {
      delete rides.startdate
    }
    rides.remove = function (enddate) {
      delete rides.enddate
    }

    rides.startdate = ourstartdate;
    rides.enddate = ourenddate

    console.log("in save ride" + JSON.stringify(rides));
    return this.http.post(`${this.host}/rides/create`, rides);
  }
  // findRider(email){
  //   return this.http.get(`${this.host}/riders/login/${email}`);
  // }

 
}