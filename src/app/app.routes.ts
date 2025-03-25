import { Routes } from '@angular/router';
import { DashboardComponent } from './feature';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
       loadChildren: () => import('./feature/dashboard/routes').then(m => m.default)
      }
    ]
  }

];
