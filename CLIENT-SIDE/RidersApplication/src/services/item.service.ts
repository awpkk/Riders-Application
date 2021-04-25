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
  deleteItem(id){
    return this.http.delete(`${this.host}/items/${id}`);
  }
  findItemById(id){
    return this.http.get(`${this.host}/items/${id}`);
  }
  editItem(id , newItem){
    return this.http.put(`${this.host}/items/${id}`, newItem);
  }
  purchaseItem(id, email){
    return this.http.post(`${this.host}/items/purchase/${id}`, email); 
  }
  getpurchasedItems(email){
    return this.http.get(`${this.host}/riders/getPurchasedItems/${email}`)
  }
  // updateItemById(email){
  //   return this.http.get(`${this.host}/`)
  // }

}
