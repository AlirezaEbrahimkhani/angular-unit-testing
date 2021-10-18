import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  @Output() loggedIn = new EventEmitter<any>();
  @Input() enabled = true;

  addBook(email: any, password: any) {
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new Book(email, password));
    }
  }
}

export class Book {
  constructor(public title: string, public password: string) {}
}
