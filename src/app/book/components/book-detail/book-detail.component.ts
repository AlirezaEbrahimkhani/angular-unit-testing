import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  @Input() book: any;
  @Output() clickBook = new EventEmitter();
}
