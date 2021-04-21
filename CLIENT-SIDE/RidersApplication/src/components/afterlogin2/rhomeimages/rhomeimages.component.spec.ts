import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhomeimagesComponent } from './rhomeimages.component';

describe('RhomeimagesComponent', () => {
  let component: RhomeimagesComponent;
  let fixture: ComponentFixture<RhomeimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhomeimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhomeimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
