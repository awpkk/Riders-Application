import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  itemForm: FormGroup;
  closeResult = '';

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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$")]),


      description: new FormControl("", [Validators.required, Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$")]),
      price: new FormControl("", [Validators.required, Validators.pattern("[0-9]+(\.[0-9][0-9]?)?")])
    });
  }

}
