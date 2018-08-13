import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';
import {HeaderComponent} from '../../header/header.component'

describe('HomeViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewComponent ,HeaderComponent]
    })
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MainViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
