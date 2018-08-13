import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import {  Router, RouterModule } from '@angular/router';
import { ForgotPasswordViewComponent } from './forgot-password-view.component';
import {RouterStub} from '../../common-class/RouterStub'

describe('LoginForgotViewComponent', () => {
  let component: ForgotPasswordViewComponent;
  let fixture: ComponentFixture<ForgotPasswordViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordViewComponent ],
      imports:[ 
        FormsModule,
        ReactiveFormsModule,
        HttpModule
        ],
        providers:[{provide: Router, useClass: RouterStub}],
        
    })
  });

  beforeEach(() =>([
    { 
        provide: Router, 
        useClass: class { navigate = jasmine.createSpy("navigate"); }
    }]));

  it('should create app',()=>{
    let fixture =TestBed.createComponent(ForgotPasswordViewComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
});
