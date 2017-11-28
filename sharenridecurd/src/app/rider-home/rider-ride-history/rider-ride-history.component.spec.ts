import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderRideHistoryComponent } from './rider-ride-history.component';

describe('RiderRideHistoryComponent', () => {
  let component: RiderRideHistoryComponent;
  let fixture: ComponentFixture<RiderRideHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderRideHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderRideHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
