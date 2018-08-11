import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForgotViewComponent } from './login-forgot-view.component';

describe('LoginForgotViewComponent', () => {
  let component: LoginForgotViewComponent;
  let fixture: ComponentFixture<LoginForgotViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginForgotViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForgotViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
