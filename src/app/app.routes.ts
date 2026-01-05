import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gestion',
    loadComponent: () => import('./gestion/gestion.page').then( m => m.GestionPage)
  },
  {
    path: 'configuraciones',
    loadComponent: () => import('./configuraciones/configuraciones.page').then( m => m.ConfiguracionesPage)
  },
];
