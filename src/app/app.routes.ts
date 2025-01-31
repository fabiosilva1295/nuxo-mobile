import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'config',
        loadChildren: () => import('./pages/config/config.routes').then((m) => m.configRoutes)
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.routes').then((m) => m.homeRoutes)
      }
    ]
  }
];
