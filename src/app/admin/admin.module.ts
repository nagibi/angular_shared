import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CoreModule } from '../core/core.module';
import { AdminRoutingModule } from './admin.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
