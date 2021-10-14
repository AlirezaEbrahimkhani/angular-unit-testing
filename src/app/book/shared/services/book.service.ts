import { Injectable } from '@angular/core';

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

  public hasBookInStore(): boolean {
    if (this.books.length > 0) return true;
    else return false;
  }
}
