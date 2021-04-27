import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,RouterTestingModule,  HttpClientTestingModule ],
      declarations: [ LoginComponent ],
      providers: [],     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email-Check]- Should check empty email address is invalid', () => {
    let email = component.myForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
  });

  it('[Password-Check]- Should check empty password is invalid', () => {
    let password = component.myForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
  });

  it('[Email-Check]- Should check email address is valid', () => {
    let email = component.myForm.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.valid).toBeTruthy();
  });

  it('[Password-Check]- should check password validity',()=>{
    let pwd = component.myForm.controls['password'];
    pwd.setValue('abc123456');
    expect(pwd.valid).toBeTruthy();
  });

  it('[Password-Check]- should check password invalidity',()=>{
    let pwd = component.myForm.controls['password'];
    pwd.setValue('abc');
    expect(pwd.valid).toBeFalsy();
  });

  it('[Form-Check]- should check form is invalid if no value entered',()=>{
    expect(component.myForm.valid).toBeFalsy();
  });

  it('[Form-Check]- should check form is invalid if incorrect email entered',()=>{
    let email = component.myForm.controls['email'];
    email.setValue('abc');
    let pwd = component.myForm.controls['password'];
    pwd.setValue('abc123456');
    expect(component.myForm.valid).toBeFalsy();
  });

  it('[Form-Check]- should check form is invalid if incorrect(length<8) password entered',()=>{
    let email = component.myForm.controls['email'];
    email.setValue('abc@gmail.com');
    let pwd = component.myForm.controls['password'];
    pwd.setValue('abc');
    expect(component.myForm.valid).toBeFalsy();
  });

  it('[Form-Check]- should check form is invalid if incorrect email & password entered',()=>{
    let email = component.myForm.controls['email'];
    email.setValue('abc');
    let pwd = component.myForm.controls['password'];
    pwd.setValue('abc');
    expect(component.myForm.valid).toBeFalsy();
  });

  it('[Form-Check]- should check form is valid if correct values entered',()=>{
    let email = component.myForm.controls['email'];
    email.setValue('abc@gmail.com');
    let pwd = component.myForm.controls['password'];
    pwd.setValue('abc123456');
    expect(component.myForm.valid).toBeTruthy();
  });
});