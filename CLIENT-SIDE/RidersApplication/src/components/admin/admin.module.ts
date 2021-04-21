import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminRootComponent } from "./admin-root/admin-root.component";
import { ViewRidersComponent } from "./view-riders/view-riders.component";
import { ViewRidesComponent } from "./view-rides/view-rides.component";
import routes from "./admin.routing";

@NgModule({
    declarations: [
       AdminRootComponent,
       ViewRidersComponent,
       ViewRidesComponent
   ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
  ],
    providers: []
})
export class AdminModule { }