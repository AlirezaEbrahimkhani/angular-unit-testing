import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  @Output() loggedIn = new EventEmitter<any>();
  @Input() enabled = true;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {}

  addBook() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.loggedIn.emit(
        new User(this.form.value.email, this.form.value.password)
      );
    }
  }
}

export class User {
  constructor(public email?: string, public password?: string) {}
}
