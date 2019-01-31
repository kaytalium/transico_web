import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordDialogPopupComponent } from './forget-password-dialog-popup.component';

describe('ForgetPasswordDialogPopupComponent', () => {
  let component: ForgetPasswordDialogPopupComponent;
  let fixture: ComponentFixture<ForgetPasswordDialogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordDialogPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordDialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
