import { Routes } from '@angular/router';
import { DesignAlignPage } from './pages/design-align/design-align';
import { MainPage } from './pages/main/main';
import { MicroprismGlassPage } from './pages/microprism-glass/microprism-glass';

export const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'design-align',
    component: DesignAlignPage
  },
  {
    path: 'microprism-glass',
    component: MicroprismGlassPage
  }
];