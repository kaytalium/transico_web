import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorAssignmentComponent } from './inspector-assignment.component';

describe('InspectorAssignmentComponent', () => {
  let component: InspectorAssignmentComponent;
  let fixture: ComponentFixture<InspectorAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectorAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
