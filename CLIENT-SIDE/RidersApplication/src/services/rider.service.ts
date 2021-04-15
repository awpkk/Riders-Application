import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  private data:any[] = [];

  public set riders(riders){
    this.data = riders;
  }
  public get riders(){
    return this.data;
  }

  private host:string = "http://localhost:8787";

  constructor(private http: HttpClient) { }

  getRiders(){
    return this.http.get(`${this.host}/riders/all`);
  }
  saveRider(rider){
    return this.http.post(`${this.host}/riders/register`, rider);
  }
  // deleteBook(id){
  //   return this.http.delete(`${this.host}/books/${id}`);
  // }

  // findBookById(id){
  //   return this.http.get(`${this.host}/books/${id}`);
  // }

  // editBook(id, newBook){
  //   return this.http.put(`${this.host}/books/${id}`, newBook);
  // }
}