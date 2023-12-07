import { Component } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces/movie';
import { WatchlistService } from 'src/app/shared/services/watchlist.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movie!: Movie;
  trailerUrl!: SafeUrl;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private watchlistService: WatchlistService,
  ) {
    this.movie = this.router.getCurrentNavigation()?.extras.state as Movie;

    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.movie.trailerLink.split('=')[1]}`,
    );
  }

  toogleClicked() {
    if (this.movie.onWatchlist) {
      this.watchlistService.removeFromWatchlist(this.movie.id);
      this.movie.onWatchlist = false;
    } else {
      this.watchlistService.addToWatchlist(this.movie.id);
      this.movie.onWatchlist = true;
    }
  }
}
