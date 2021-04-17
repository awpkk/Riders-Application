import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {

  constructor() { }

  private url:string = "http://localhost:3000/Items"
   ItemsList:any  = {};

   ngOnInit(){
     fetch(this.url, {
       method: "get"
     })
     .then((response:any)=>{
       return response.json();
     })
     .then((data:any)=>{
       console.log(data);
       this.ItemsList = data;
     });
   }

   colors=['PaleVioletRed','GoldenRod','MediumSeaGreen', 'RebeccaPurple', 'Coral', 'DarkCyan'];
   randomItem;
 
   getColor(){
      this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
      return this.randomItem;
   }
}
