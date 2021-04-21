import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import routes from "./afterlogin2.routing";
import { EnrolledRidesComponent } from "./enrolled-rides/enrolled-rides.component";
import { HomeComponent } from "./home/home.component";
import { PurchaseItemComponent } from "./purchase-item/purchase-item.component";
import { RideCreateComponent } from "./ride-create/ride-create.component";
import { RideJoinComponent } from "./ride-join/ride-join.component";
import { RhomeimagesComponent } from './rhomeimages/rhomeimages.component';

@NgModule({
    declarations: [
        HomeComponent,
        RideCreateComponent,
        RideJoinComponent,
        EnrolledRidesComponent,
        PurchaseItemComponent,
        RhomeimagesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
  ],
    providers: []
})
export class Afterlogin2Module { }