import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDepotsComponent } from './bus-depots.component';

describe('BusDepotsComponent', () => {
  let component: BusDepotsComponent;
  let fixture: ComponentFixture<BusDepotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusDepotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
