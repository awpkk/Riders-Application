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
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
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
        // this.router.navigate(['/afterlogin2/riderhome3/'+this.email])
      })

  }
 
}
