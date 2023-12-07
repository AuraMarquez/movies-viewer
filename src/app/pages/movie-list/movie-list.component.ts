import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie';
import { WatchlistService } from 'src/app/shared/services/watchlist.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  watchlist: number[] = [];

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.watchlist = this.watchlistService.obtainWishList();
    this.setWatchlist();

    this.watchlistService.observeStorage().subscribe((data) => {
      this.watchlist = data as number[];
      this.setWatchlist();
    });
  }

  setWatchlist() {
    for (let index = 0; index < this.watchlist.length; index++) {
      const movie = this.movies.find((e) => e.id === this.watchlist[index]);
      movie!.onWatchlist = true;
    }
  }

  orderTitleAsc = () => {
    this.movies = this.movies.sort((a, b) =>
      a.title < b.title ? -1 : a.title > b.title ? 1 : 0,
    );
  };

  orderTitleDesc = () => {
    this.movies = this.movies.sort((a, b) =>
      a.title > b.title ? -1 : a.title < b.title ? 1 : 0,
    );
  };

  orderDateAsc = () => {
    this.movies = this.movies.sort((a, b) => {
      const aTime = new Date(a.releaseDate).getTime();
      const bTime = new Date(b.releaseDate).getTime();

      const result = aTime < bTime ? -1 : aTime > bTime ? 1 : 0;

      return result;
    });
  };

  orderDateDesc = () => {
    this.movies = this.movies.sort((a, b) => {
      const aTime = new Date(a.releaseDate).getTime();
      const bTime = new Date(b.releaseDate).getTime();

      const result = aTime > bTime ? -1 : aTime < bTime ? 1 : 0;

      return result;
    });
  };

  orderingOperations = [
    { label: 'Title A-Z', operation: this.orderTitleAsc },
    { label: 'Title Z-A', operation: this.orderTitleDesc },
    { label: 'Oldest', operation: this.orderDateAsc },
    { label: 'Most recent', operation: this.orderDateDesc },
  ];

  movies: Movie[] = [
    {
      id: 1,
      title: 'Tenet',
      description:
        'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in  something beyond real time.',
      rating: 7.8,
      duration: '2h 30 min',
      genre: 'Action, Sci-Fi',
      releaseDate: '3 September 2020',
      trailerLink: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
      poster: 'Tenet.png',
    },
    {
      id: 2,
      title: 'Spider-Man: Into the Spider-Verse',
      description:
        'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider powered individuals from other dimensions to stop a threat for all realities.',
      rating: 8.4,
      duration: '1h 57min',
      genre: 'Action, Animation, Adventure',
      releaseDate: '14 December 2018',
      trailerLink: 'https://www.youtube.com/watch?v=tg52up16eq0',
      poster: 'Spider Man.png',
    },
    {
      id: 3,
      title: 'Knives Out',
      description:
        'A detective investigates the death of a patriarch of an eccentric, combative family.',
      rating: 7.9,
      duration: '2h 10min',
      genre: 'Comedy, Crime, Drama',
      releaseDate: '27 November 2019',
      trailerLink: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
      poster: 'Knives Out.png',
    },
    {
      id: 4,
      title: 'Guardians of the Galaxy',
      description:
        'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to  purge the universe.',
      rating: 8.0,
      duration: '2h 1min',
      genre: 'Action, Adventure, Comedy',
      releaseDate: '1 August 2014',
      trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
      poster: 'Guardians of The Galaxy.png',
    },
    {
      id: 5,
      title: 'Age of Ultron',
      description:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program  called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron  from enacting his terrible plan.",
      rating: 7.3,
      duration: '2h 21min',
      genre: 'Action, Adventure, Sci-Fi',
      releaseDate: '1 May 2015',
      trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
      poster: 'Avengers.png',
    },
  ];
}
