import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHomeViewComponent } from './login-home-view.component';

describe('LoginHomeViewComponent', () => {
  let component: LoginHomeViewComponent;
  let fixture: ComponentFixture<LoginHomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHomeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
