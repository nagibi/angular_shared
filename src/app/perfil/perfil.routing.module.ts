import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';
import { PerfilModule } from '../perfil/perfil.module';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: PerfilComponent,
    children: [],
  },
];

@NgModule({
  imports: [PerfilModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PerfilRoutingModule {}
