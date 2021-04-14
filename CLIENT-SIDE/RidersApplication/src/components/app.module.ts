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

const routes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomepageComponent },
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [RootComponent, LoginComponent, HomepageComponent, RegistrationComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap:[
    RootComponent,
       
  ]
})
export default class AppModule { }