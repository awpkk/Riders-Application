import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminRootComponent } from "./admin-root/admin-root.component";
import { ViewRidersComponent } from "./view-riders/view-riders.component";
import { ViewRidesComponent } from "./view-rides/view-rides.component";
import routes from "./admin.routing";
import { CreateItemComponent } from "./create-item/create-item.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
       AdminRootComponent,
       ViewRidersComponent,
       ViewRidesComponent,
       CreateItemComponent
       
   ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
  ],
    providers: []
})
export class AdminModule { }