import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../components/header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[],
  declarations: [
    ],
    providers:[HeaderService]
})
export class CoreModule { }
