import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  email: any;
  PurchasedItemsList: any;
  message: string;

  constructor( private activatedroute: ActivatedRoute, private itemService: ItemService) {   this.activatedroute.params.subscribe(data => {
    this.email = data.email;
    console.log(this.email);
  })
  this.getPurchasedItems() }

  ngOnInit(): void {

    this.getPurchasedItems()
  }
  colors = ['PaleVioletRed', 'GoldenRod', 'MediumSeaGreen', 'RebeccaPurple', 'Coral', 'DarkCyan'];
  randomItem;
  getColor() {
    this.randomItem = this.colors[Math.floor(Math.random() * this.colors.length)];
    return this.randomItem;
  }
  getPurchasedItems() {
    this.itemService.getpurchasedItems(this.email)
      .subscribe((res: any) => {
        console.log("abc")
        console.log(res);
        this.PurchasedItemsList = res;
        console.log("This is orderslist++++" + this.PurchasedItemsList);
        if (this.isEmpty(this.PurchasedItemsList)) {
          this.message = "You have not Purchased any item yet, You may Shop an Items!";
        } else {
          this.message = "";
        }
      })
  }
  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  // checklistempty() {
  //   return this.isEmpty(this.PurchasedItemsList);
  // }
}

