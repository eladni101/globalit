import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from '../home-view/home-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeViewComponent],
  exports:[HomeViewComponent]
})
export class HomeModule { }
