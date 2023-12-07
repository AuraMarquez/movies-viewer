import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieThumbnailComponent } from './shared/components/movie-thumbnail/movie-thumbnail.component';
import { ToogleComponent } from './shared/components/toogle/toogle.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieThumbnailComponent,
    ToogleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
