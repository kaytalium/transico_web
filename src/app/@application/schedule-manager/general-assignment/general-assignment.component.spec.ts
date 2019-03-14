import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAssignmentComponent } from './general-assignment.component';

describe('GeneralAssignmentComponent', () => {
  let component: GeneralAssignmentComponent;
  let fixture: ComponentFixture<GeneralAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
