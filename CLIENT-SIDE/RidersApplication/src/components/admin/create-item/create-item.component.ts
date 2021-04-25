import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  itemForm: FormGroup;

  closeResult = '';
  email: any;

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  constructor(private router: Router, private modalService: NgbModal, private itemService: ItemService, private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data => {
      this.email = data.email;
    })
  }

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$")]),
      description: new FormControl("", [Validators.required, Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$")]),
      price: new FormControl("", [Validators.required, Validators.pattern("[0-9]+(\.[0-9][0-9]?)?")])
    });
  }

  createItem() {
    console.log("NAME = ")
    console.log(this.itemForm.value.name)

    console.log("Description = ")
    console.log(this.itemForm.value.description)

    console.log("price = ")
    console.log(this.itemForm.value.price)

    this.itemService.saveItem(this.itemForm.value)
      .subscribe((res: any) => {
        console.log(res);
        // console.log("in reide create and create++++"+this.email)
        this.router.navigate(['/admin/adminroot']);
      })
  }
  // message(e){
  //   console.log("e = ")
  //   console.log(e)
  //   if(e.keyboardEvent.key.equals("-")){
      
  //   console.log("Key pressed!")
  //    alert("You pressed a key inside the input field");
  //   }

  // }
}


      
      


    
