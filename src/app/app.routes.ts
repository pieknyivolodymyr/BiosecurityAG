import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app/modules/client/client.routes').then(m => m.client_routes)
    },
    {
        path: 'admin',
        loadComponent: () => import('./app/modules/admin/admin.component').then(c => c.AdminComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
