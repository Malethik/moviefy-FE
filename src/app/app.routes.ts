import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./main/home/home.component'),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
