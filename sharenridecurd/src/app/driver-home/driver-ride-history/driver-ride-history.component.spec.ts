import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRideHistoryComponent } from './driver-ride-history.component';

describe('DriverRideHistoryComponent', () => {
  let component: DriverRideHistoryComponent;
  let fixture: ComponentFixture<DriverRideHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverRideHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRideHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
