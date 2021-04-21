import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideCreateComponent } from './ride-create.component';

describe('RideCreateComponent', () => {
  let component: RideCreateComponent;
  let fixture: ComponentFixture<RideCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
