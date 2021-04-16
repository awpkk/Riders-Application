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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'riderhome/:email', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'ride-create', component: RideCreateComponent },
  { path: 'riderhome', component: HomeComponent },
  { path: 'ride-join', component: RideJoinComponent },
  { path: '**', pathMatch: 'full', redirectTo: "home" }
];

@NgModule({
  declarations: [RootComponent, LoginComponent, HomepageComponent, RideJoinComponent, RideCreateComponent, RegistrationComponent, HomeComponent],
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
  providers: [RegistrationComponent],
  bootstrap: [
    RootComponent,
  ]
})
export default class AppModule { }