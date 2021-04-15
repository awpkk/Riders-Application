import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideJoinComponent } from './ride-join.component';

describe('RideJoinComponent', () => {
  let component: RideJoinComponent;
  let fixture: ComponentFixture<RideJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
