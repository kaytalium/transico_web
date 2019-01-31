import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockscreenAvatarComponent } from './lockscreen-avatar.component';

describe('LockscreenAvatarComponent', () => {
  let component: LockscreenAvatarComponent;
  let fixture: ComponentFixture<LockscreenAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockscreenAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockscreenAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
