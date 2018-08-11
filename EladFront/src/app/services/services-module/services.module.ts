import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CanMoveHomeService} from '../can-move-home.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[CanMoveHomeService]
})
export class ServicesModule { }
