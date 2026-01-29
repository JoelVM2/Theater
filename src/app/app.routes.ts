import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieForm } from './components/movie-form/movie-form';
import { List } from './pages/list/list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'list', component: List },
  { path: 'create', component: MovieForm },
];
