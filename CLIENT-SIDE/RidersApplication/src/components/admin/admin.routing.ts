import { Routes } from "@angular/router";
import { AdminRootComponent } from "./admin-root/admin-root.component";
import { ViewRidersComponent } from "./view-riders/view-riders.component";
import { ViewRidesComponent } from "./view-rides/view-rides.component";

const routes: Routes = [
    {
        path: 'adminroot',
        component: AdminRootComponent, // this is the component with the <router-outlet> in the template
        children: [
            {
                path: 'viewriders', // child route path
                component: ViewRidersComponent, // child route component that the router renders
            },
            {
                path: 'viewrides', // child route path
                component: ViewRidesComponent, // child route component that the router renders
            },

        ],
    },
];
export default routes;