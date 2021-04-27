import { Routes } from "@angular/router";
import { RideJoinComponent } from "./ride-join/ride-join.component";
import { EnrolledRidesComponent } from "./enrolled-rides/enrolled-rides.component";
import { HomeComponent } from "./home/home.component";
//import { PurchaseItemComponent } from "./purchase-item/purchase-item.component";
import { RideCreateComponent } from "./ride-create/ride-create.component";
import { PurchaseItemComponent } from "./purchase-item/purchase-item.component";
import { RhomeimagesComponent } from "./rhomeimages/rhomeimages.component";
import { OrdersComponent } from "./orders/orders.component";

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
        path: 'enrolledrides2/:email',
        component: EnrolledRidesComponent,
      },
      {
        path: 'purchaseitem2/:email',
        component: PurchaseItemComponent,
      },
      {
        path: 'rhomeimages/:email',
        component: RhomeimagesComponent,
      },
      {
        path: 'orders/:email',
        component: OrdersComponent,
      },
    ],
  },
];
export default routes;