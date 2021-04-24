import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  itemForm: FormGroup;
  closeResult = '';
  item: any;

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

  constructor(private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
     private itemService: ItemService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id);
      this.findItem(params.id);
    })
  }

  findItem(id) {
    this.itemService.findItemById(id)
      .subscribe((res: any) => {
        console.log(res);
        this.item = res;
        this.initItemForm();
      })
  }

  update(){
    console.log(this.itemForm.value);
    console.log(this.item.id);
    this.itemService.editItem(this.item.id, this.itemForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      // this.router.navigate(["list"]);
    })
  }

  initItemForm(){
    
      this.itemForm = new FormGroup({
      name: new FormControl(this.item.name, [Validators.required, Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$")]),
      description: new FormControl(this.item.description, [Validators.required, Validators.pattern("^(?! )[A-Za-z0-9 ]*(?<! )$")]),
      price: new FormControl(this.item.price, [Validators.required, Validators.pattern("[0-9]+(\.[0-9][0-9]?)?")])
    });
  }
}
