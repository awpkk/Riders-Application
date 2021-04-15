import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(sectionId) {
    let element = document.getElementById(sectionId);
    if(!!element) {
      element.scrollIntoView(); // scroll to a particular element
    }
  }
  
}
