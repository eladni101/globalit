import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule,ReactiveFormsModule,FormControl} from '@angular/forms'
import {HttpModule} from '@angular/http';
import {  Router, RouterModule } from '@angular/router';
import { LoginUserViewComponent } from './login-user-view.component';
import {RouterStub} from '../../common-class/RouterStub'
import {checkEmailValidator } from '../../validators/email-check'
import {RedirectUnauthenticatedUserService} from '../../services/login servcies/redirectUnauthenticatedUser.service'
describe('LoginHomeViewComponent', () => {
  let component: LoginUserViewComponent;
  let fixture: ComponentFixture<LoginUserViewComponent>;
  TestBed.configureTestingModule({
    providers: [RedirectUnauthenticatedUserService]
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserViewComponent ],
      imports:[  FormsModule,
        ReactiveFormsModule,
        HttpModule],
        providers:[{provide: Router, useClass: RouterStub}],
    })
    .compileComponents();
  });

  it('should create app',()=>{
    let fixture =TestBed.createComponent(LoginUserViewComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
  it('should check email vaildtor',()=>{
    let vaildEmail = "eladnisan10@gmail.com"
    let invaildEmail = "sdasa@assa";
    let vaildtorEmail = checkEmailValidator();
    expect(vaildtorEmail(new FormControl(vaildEmail))).toEqual(null)
    expect(vaildtorEmail(new FormControl(invaildEmail))).toEqual({ emailNotVaild: 'Illegal email' })
  })
  it('should redriect home',()=>{
    let fixture =TestBed.createComponent(LoginUserViewComponent);
    let app = fixture.debugElement.componentInstance;
    localStorage.setItem("currentUser",JSON.stringify({email: 'fake Email',firstName:'Fake Name',lastName:'Fake last' }));
    let testBedService = TestBed.get(RedirectUnauthenticatedUserService);
    expect(testBedService.canActivate()).toEqual(true)
    localStorage.setItem("currentUser",null);
    expect(testBedService.canActivate()).toEqual(true)
  }
);

});
