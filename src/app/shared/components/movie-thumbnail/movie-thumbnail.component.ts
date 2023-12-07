import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces/movie';
import { WatchlistService } from '../../services/watchlist.service';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css'],
})
export class MovieThumbnailComponent {
  @Input() movie!: Movie;

  constructor(
    private watchlistService: WatchlistService,
    private router: Router,
  ) {}

  addToWatchlist(event: any) {
    this.watchlistService.addToWatchlist(this.movie.id);
    event.stopPropagation();
  }

  goToMovieDetails() {
    this.router.navigateByUrl(`/movie`, {
      state: this.movie,
    });
  }
}
