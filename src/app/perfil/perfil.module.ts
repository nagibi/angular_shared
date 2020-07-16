import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // CoreModule, //adicionar x remover
  ],
  declarations: [PerfilComponent]
})
export class PerfilModule { }
