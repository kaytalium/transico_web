import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleManagerComponent } from './vehicle-manager.component';

describe('VehicleManagerComponent', () => {
  let component: VehicleManagerComponent;
  let fixture: ComponentFixture<VehicleManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
