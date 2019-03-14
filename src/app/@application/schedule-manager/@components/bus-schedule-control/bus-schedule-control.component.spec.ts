import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusScheduleControlComponent } from './bus-schedule-control.component';

describe('BusScheduleControlComponent', () => {
  let component: BusScheduleControlComponent;
  let fixture: ComponentFixture<BusScheduleControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusScheduleControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusScheduleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
