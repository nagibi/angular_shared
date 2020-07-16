import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path:'**',
    //     redirectTo: '/auth/login',
    // },
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: '/auth/login',
    // },
    {
        path: 'admin',
        loadChildren: () =>
            import('./admin/admin.routing.module').then(m => m.AdminRoutingModule),
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        scrollPositionRestoration: 'top'
      })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
