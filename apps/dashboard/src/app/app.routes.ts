import { Route } from '@angular/router';
import { NxWelcome } from './nx-welcome';

export const appRoutes: Route[] = [
  {
    path: 'input_text',
    loadChildren: () =>
      import('input_text/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
