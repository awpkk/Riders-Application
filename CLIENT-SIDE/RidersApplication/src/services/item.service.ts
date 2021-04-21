import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

 // private data: any[] = [];

  private host: string = "http://localhost:8787";

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(`${this.host}/items/all`);
  }
  saveItem(items: any) {
    // console.log("in save ride" + JSON.stringify(rides));
    return this.http.post(`${this.host}/items/create`, items);
  }
}