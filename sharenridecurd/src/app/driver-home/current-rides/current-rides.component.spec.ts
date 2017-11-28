import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRidesComponent } from './current-rides.component';

describe('CurrentRidesComponent', () => {
  let component: CurrentRidesComponent;
  let fixture: ComponentFixture<CurrentRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
