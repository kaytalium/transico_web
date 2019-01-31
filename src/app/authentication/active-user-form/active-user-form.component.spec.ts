import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUserFormComponent } from './active-user-form.component';

describe('ActiveUserFormComponent', () => {
  let component: ActiveUserFormComponent;
  let fixture: ComponentFixture<ActiveUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
