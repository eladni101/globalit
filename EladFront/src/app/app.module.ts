import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login-module/login.module';
import { HomeModule } from './home/home-module/home.module';
import { ServicesModule } from './services/services-module/services.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    ServicesModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
