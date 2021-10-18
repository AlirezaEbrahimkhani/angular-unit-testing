import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookInStore: boolean = true;

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.hasBookInStore().subscribe((hasBook) => {
      this.bookInStore = hasBook;
    });
  }

  bookClicked($event: any) {
    console.log($event);
  }
}
