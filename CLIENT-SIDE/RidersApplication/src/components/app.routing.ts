// import { Routes } from "@angular/router";
// import { AboutComponent } from "./about/about.component";
// import { HomeComponent } from "./home/home.component";

import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RootComponent } from "./root/root.component";



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'root', component: RootComponent},
    { path: 'afterlogin2', loadChildren: () => import('./afterlogin2/afterlogin2.module').then(m => m.Afterlogin2Module) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];
export default routes;


