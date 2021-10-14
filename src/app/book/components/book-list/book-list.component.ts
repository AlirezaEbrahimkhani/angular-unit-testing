import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  constructor(public bookService: BookService) {}

  ngOnInit(): void {}

  bookInStore(){
    return this.bookService.hasBookInStore()
  }
}
