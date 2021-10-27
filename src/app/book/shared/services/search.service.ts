import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
class SearchItem {
  constructor(
    public name: string,
    public artist: string,
    public thumbnail: string,
    public artistId: number
  ) {}
}
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[] = [];

  constructor(private http: HttpClient) {
    this.results = [];
  }

  search(term: string) {
    this.results = [];
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http
    .get(apiURL)
    .pipe(
      map(({ results }: any) =>
      results.map(
        (res: any) =>
              new SearchItem(
                res.trackName,
                res.artistName,
                res.artworkUrl60,
                res.artistId
              )
          )
        )
      );
  }
}
