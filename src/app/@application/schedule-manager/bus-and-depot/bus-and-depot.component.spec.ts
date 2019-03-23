import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusAndDepotComponent } from './bus-and-depot.component';

describe('BusAndDepotComponent', () => {
  let component: BusAndDepotComponent;
  let fixture: ComponentFixture<BusAndDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusAndDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusAndDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
