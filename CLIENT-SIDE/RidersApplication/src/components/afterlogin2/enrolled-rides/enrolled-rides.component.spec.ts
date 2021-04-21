import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledRidesComponent } from './enrolled-rides.component';

describe('EnrolledRidesComponent', () => {
  let component: EnrolledRidesComponent;
  let fixture: ComponentFixture<EnrolledRidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolledRidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
