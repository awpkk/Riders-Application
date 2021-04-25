import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  email: any;

  constructor(private router: Router, private itemService: ItemService, private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data => {
      this.email = data.email;
    })
  }

  ItemsList: any = {};

  ngOnInit() {
    this.getItems()
  }

  colors = ['PaleVioletRed', 'GoldenRod', 'MediumSeaGreen', 'RebeccaPurple', 'Coral', 'DarkCyan'];
  randomItem;

  getColor() {
    this.randomItem = this.colors[Math.floor(Math.random() * this.colors.length)];
    return this.randomItem;
  }
  getItems() {
    this.itemService.getItems()
      .subscribe((res: any) => {
        console.log(JSON.stringify(res));
        this.ItemsList = res;
      })
  }
  purchaseItem(itemID: any) {
    console.log("in purcahse +++" + this.email);
    console.log("in purchase item" + JSON.stringify(itemID))
    this.itemService.purchaseItem(itemID, this.email)
      .subscribe((res: any) => {
        console.log(res);
        // this.RidesList = res;
        // this.getAllCreatedRides();
        // this.findRiderByEmail()
      })
  }
}
