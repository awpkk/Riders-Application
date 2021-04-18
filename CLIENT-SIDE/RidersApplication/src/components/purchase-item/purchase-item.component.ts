import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/services/item.service';

enableProdMode();

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {

  constructor(private router: Router, private itemService: ItemService) {}

  private url:string = "http://localhost:3000/Items"
   ItemsList:any  = {};

   ngOnInit(){
    
    this.getItems()

   }

   colors=['PaleVioletRed','GoldenRod','MediumSeaGreen', 'RebeccaPurple', 'Coral', 'DarkCyan'];
   randomItem;
 
   getColor(){
      this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
      return this.randomItem;
   }
   getItems(){
    this.itemService.getItems()
    .subscribe((res: any) => {
      console.log(JSON.stringify(res));
      this.ItemsList=res;
    })
   }
}
