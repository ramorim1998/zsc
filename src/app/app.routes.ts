import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./componentes/home/home.component').then(m => m.HomeComponent) },
  { path: 'historia', loadComponent: () => import('./componentes/history/history.component').then(m => m.HistoryComponent) },
  { path: 'agenda', loadComponent: () => import('./componentes/shows-schedule/shows-schedule.component').then(m => m.ShowsScheduleComponent) },
  { path: 'lancamentos', loadComponent: () => import('./componentes/new-releases/releases.component').then(m => m.ReleasesComponent) },
  { path: 'banda', loadComponent: () => import('./componentes/about-us/about-us.component').then(m => m.AboutUsComponent) },
  { path: 'contato', loadComponent: () => import('./componentes/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'loja', loadComponent: () => import('./componentes/store/store.component').then(m => m.StoreComponent) },
  { path: '**', redirectTo: '' }
];

