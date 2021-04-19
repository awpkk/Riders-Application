import { ViewRidesComponent } from './admin/view-rides/view-rides.component';
import { ViewRidersComponent } from './admin/view-riders/view-riders.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RideCreateComponent } from './ride-create/ride-create.component';
import { RideJoinComponent } from './ride-join/ride-join.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { AdminRootComponent } from './admin/admin-root/admin-root.component';
import { EnrolledRidesComponent } from './enrolled-rides/enrolled-rides.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'riderhome/:email', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'ride-create/:email', component: RideCreateComponent },
  { path: 'ride-join/:email', component: RideJoinComponent },
  { path: 'purchase-item', component: PurchaseItemComponent },
  { path: 'admin-root', component: AdminRootComponent },
  { path: 'view-rides', component: ViewRidesComponent },
  { path: 'view-riders', component: ViewRidersComponent },
  { path: 'enrolled-rides/:email', component: EnrolledRidesComponent },
  { path: '**', pathMatch: 'full', redirectTo: "home" }
];

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomepageComponent,
    RideJoinComponent,
    RideCreateComponent,
    RegistrationComponent,
    HomeComponent,
    PurchaseItemComponent,
    AdminRootComponent,
    ViewRidersComponent,
    ViewRidesComponent,
    EnrolledRidesComponent
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
    RootComponent,
  ]
})
export default class AppModule { }