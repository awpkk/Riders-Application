import { Routes } from "@angular/router";
import { RideJoinComponent } from "./ride-join/ride-join.component";
import { EnrolledRidesComponent } from "./enrolled-rides/enrolled-rides.component";
import { HomeComponent } from "./home/home.component";
//import { PurchaseItemComponent } from "./purchase-item/purchase-item.component";
import { RideCreateComponent } from "./ride-create/ride-create.component";
import { PurchaseItemComponent } from "./purchase-item/purchase-item.component";
import { RhomeimagesComponent } from "./rhomeimages/rhomeimages.component";

// const routes: Routes = [
//     { path: 'riderhome3/:email', component: HomeComponent },
//     { path: 'ridecreate2/:email', component:RideCreateComponent}
//     //{ path: '**', pathMatch: 'full', redirectTo: "riderhome/:email" }
//   ];
//   export default routes;
const routes: Routes = [
  {
    path: 'riderhome3/:email',
    component: HomeComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'ridecreate2/:email', // child route path
        component: RideCreateComponent, // child route component that the router renders
      },
      {
        path: 'ridejoin2/:email',
        component: RideJoinComponent,
      },
      {
        path:  'enrolledrides2/:email',
        component: EnrolledRidesComponent,
      },
      {
        path:  'purchaseitem2/:email',
        component: PurchaseItemComponent ,
      },
      {
        path:  'rhomeimages/:email',
        component: RhomeimagesComponent ,
      },
         
    ],
  },
];
  export default routes;