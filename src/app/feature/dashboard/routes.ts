
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


export default [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: ':ide',
    loadComponent: () =>
      import('./dashboard.component').then((m) => m.DashboardComponent),
  },


  { path: '**', redirectTo: '', pathMatch: 'full' },
] satisfies Route[];
