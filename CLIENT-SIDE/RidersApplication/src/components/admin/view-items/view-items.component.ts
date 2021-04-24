import { ItemService } from './../../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  itemId: string;

  constructor(private itemService: ItemService, private router: Router) { }

  ItemsList: any = {};

  ngOnInit() {
    this.getAllAddedItems();

  }

  getAllAddedItems() {
    this.itemService.getItems()
      .subscribe((res: any) => {
        console.log(JSON.stringify(res));
        this.ItemsList = res;
      })

  }

  deleteItem(id){
    this.itemService.deleteItem(id)
    .subscribe((res:any)=>{
      this.getAllAddedItems();
    })
  }

}
