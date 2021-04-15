import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ride-create',
  templateUrl: './ride-create.component.html',
  styleUrls: ['./ride-create.component.css']
})
export class RideCreateComponent implements OnInit {
  rideForm: FormGroup;
  model: NgbDateStruct;
  model1: NgbDateStruct;
  closeResult = '';

  private url: string = "http://localhost:3000/rides"
  ridersList: any = {};

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  constructor(private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.rideForm = new FormGroup({

      ridetitle: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      source: new FormControl("", Validators.required),
      destination: new FormControl("", Validators.required),
      //startdate: new FormControl("1986-07-31", Validators.required),
      //enddate: new FormControl("1986-07-31", Validators.required),
      startdate: new FormControl(Validators.required),
      enddate: new FormControl(Validators.required)



    });
  }

  create() {
    console.log(this.rideForm.value);

 

    
   


    //this.bookService.saveBook(this.bookForm.value)
    //  let rider = {
    //    ridetitle: "",
    //    description: "",
    //    source: "",
    //    destination: "",
    //    startdate: "",
    //    enddate: ""
    //  };
    // fetch(this.url, {
    //   method: "post",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(rider)
    // })
    // .then((response:any)=>{
    //   return response.json();
    // })
    // .then((data:any)=>{
    //   console.log(data);
    // });

    fetch(this.url, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.rideForm.value)
    })
      .then((response: any) => {
        return response.json();
      })
       .then((data: any) => {
         console.log(data);
       });

  }
  

}


