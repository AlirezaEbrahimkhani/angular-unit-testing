import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books = [
    {
      title: 'Book A',
      desc: 'Desc Book A',
    },
    {
      title: 'Book B',
      desc: 'Desc Book B',
    },
  ];
  constructor() {}

  private _setItemToLocalStorage(key = '', value = '') {
    localStorage.setItem(key, value);
  }

  public readItemFromLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  public removeItemFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  public hasBookInStore(): Observable<boolean> {
    if (this.books.length > 0) return of(true);
    else return of(false);
  }
}
