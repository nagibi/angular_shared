import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminModule } from './admin.module';

const ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'perfil',
        loadChildren: () =>
          import('../perfil/perfil.routing.module').then(
            (m) => m.PerfilRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [AdminModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
