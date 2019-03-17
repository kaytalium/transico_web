import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusAndTerminalComponent } from './bus-and-terminal.component';

describe('BusAndTerminalComponent', () => {
  let component: BusAndTerminalComponent;
  let fixture: ComponentFixture<BusAndTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusAndTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusAndTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
