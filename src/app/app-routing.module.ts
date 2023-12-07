import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'movie',
    component: MovieDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
