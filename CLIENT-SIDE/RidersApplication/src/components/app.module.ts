
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RootComponent } from "./root/root.component";
import { NgModule } from '@angular/core';
import routes from './app.routing';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomepageComponent,
    RegistrationComponent  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [RegistrationComponent, LoginComponent],
  bootstrap: [
    RootComponent
  ]
})
export default class AppModule { }








// const routes: Routes = [
//  { path: 'login', component: LoginComponent },
//    { path: 'home', component: HomepageComponent },
// //   { path: 'riderhome/:email', component: HomeComponent },
//    { path: 'registration', component: RegistrationComponent },
// //   { path: 'ride-create/:email', component: RideCreateComponent },
// //   { path: 'ride-join/:email', component: RideJoinComponent },
// //  { path: 'purchase-item', component: PurchaseItemComponent },
// //   { path: 'admin-root', component: AdminRootComponent },
// //   { path: 'view-rides', component: ViewRidesComponent },
// //   { path: 'view-riders', component: ViewRidersComponent },
// //   { path: 'enrolled-rides/:email', component: EnrolledRidesComponent },
// //   { path: '**', pathMatch: 'full', redirectTo: "home" }
// ];
// // const homeroutes: Routes = [
// //   { path: 'purchase-item', component: PurchaseItemComponent },
// // ]


