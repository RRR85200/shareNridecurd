import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderCurrentRidesComponent } from './rider-current-rides.component';

describe('RiderCurrentRidesComponent', () => {
  let component: RiderCurrentRidesComponent;
  let fixture: ComponentFixture<RiderCurrentRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderCurrentRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderCurrentRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
