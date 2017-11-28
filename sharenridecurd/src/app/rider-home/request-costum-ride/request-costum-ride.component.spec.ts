import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCostumRideComponent } from './request-costum-ride.component';

describe('RequestCostumRideComponent', () => {
  let component: RequestCostumRideComponent;
  let fixture: ComponentFixture<RequestCostumRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCostumRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCostumRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
