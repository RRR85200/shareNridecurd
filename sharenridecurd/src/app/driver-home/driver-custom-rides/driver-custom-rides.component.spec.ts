import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCustomRidesComponent } from './driver-custom-rides.component';

describe('DriverCustomRidesComponent', () => {
  let component: DriverCustomRidesComponent;
  let fixture: ComponentFixture<DriverCustomRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCustomRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCustomRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
