import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private data: any[] = [];

  private host: string = "http://localhost:8787";

  constructor(private http: HttpClient) { }

  getRides() {
    return this.http.get(`${this.host}/rides/all`);
  }
  saveRide(rides: any) {
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

  enrollRide(id: number, email: any) {
    return this.http.post(`${this.host}/riders/enroll/${email}`, id);
  }

  //@PutMapping("/removeRider/{email}")
  removeRider(id:number, email:any){
    return this.http.put(`${this.host}/rides/removeRider/${email}`, id);
  }
}