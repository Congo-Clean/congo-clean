import { Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePageComponent),
        title: 'Accueil · Congo Clean',
      },
      {
        path: 'a-propos',
        loadComponent: () =>
          import('./pages/about/about.page').then((m) => m.AboutPageComponent),
        title: 'À propos · Congo Clean',
      },
      {
        path: 'actions',
        loadComponent: () =>
          import('./pages/actions/actions.page').then((m) => m.ActionsPageComponent),
        title: 'Nos actions · Congo Clean',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.page').then((m) => m.ContactPageComponent),
        title: 'Contact · Congo Clean',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
