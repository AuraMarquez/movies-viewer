export interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
  duration: string;
  genre: string;
  releaseDate: string;
  trailerLink: string;
  poster: string;
  onWatchlist?: boolean;
}
