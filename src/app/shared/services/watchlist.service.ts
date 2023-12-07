import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private savedWatchlist: string | null = null;
  private watchList: number[] = [];

  private storageSubject = new Subject();

  observeStorage() {
    return this.storageSubject.asObservable();
  }

  public obtainWishList() {
    this.getWatchlist();
    return this.watchList;
  }

  public addToWatchlist(id: number) {
    this.getWatchlist();

    if (!this.watchList.includes(id)) {
      this.watchList.push(id);
    }

    this.setWatchlist();
  }

  public removeFromWatchlist(id: number): void {
    this.getWatchlist();

    if (this.watchList.includes(id)) {
      this.watchList.splice(this.watchList.indexOf(id, 0), 1);
    }

    this.setWatchlist();
  }

  getWatchlist() {
    this.savedWatchlist = localStorage.getItem('watchlist');
    this.watchList = this.savedWatchlist ? JSON.parse(this.savedWatchlist) : [];
  }

  setWatchlist() {
    localStorage.setItem('watchlist', JSON.stringify(this.watchList));
    this.savedWatchlist = localStorage.getItem('watchlist');

    this.storageSubject.next(this.watchList);
  }
}
