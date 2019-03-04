import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeHolderComponent } from './time-holder.component';

describe('TimeHolderComponent', () => {
  let component: TimeHolderComponent;
  let fixture: ComponentFixture<TimeHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
