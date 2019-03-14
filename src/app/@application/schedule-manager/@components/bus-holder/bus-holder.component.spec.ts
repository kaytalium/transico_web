import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusHolderComponent } from './bus-holder.component';

describe('TimeHolderComponent', () => {
  let component: BusHolderComponent;
  let fixture: ComponentFixture<BusHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
