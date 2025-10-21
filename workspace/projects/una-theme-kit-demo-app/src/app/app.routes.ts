import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full'
  },
  {
    path: 'getting-started',
    loadComponent: () => import('./features/getting-started/getting-started.component').then(m => m.GettingStartedComponent)
  },
  {
    path: 'variables',
    loadComponent: () => import('./features/variables-reference/variables-reference.component').then(m => m.VariablesReferenceComponent)
  }
];
