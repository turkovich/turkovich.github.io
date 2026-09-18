import { Routes } from '@angular/router';
import { DesignAlignPage } from './pages/design-align/design-align';
import { MainPage } from './pages/main/main';

export const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'design-align',
    component: DesignAlignPage
  }
];