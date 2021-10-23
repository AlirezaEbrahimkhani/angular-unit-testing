import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceUnderlinePipe } from './shared/pipes/replace-underline.pipe';
import { BookListComponent } from './components/book-list/book-list.component';
import { MatCardModule } from '@angular/material/card';
import { BookRoutingComponent } from './book-routing.component';
import { BookRoutingModule } from './book.routing';
import { AddBookComponent } from './components/add-book/add-book.component';
import { HoverFocusDirective } from './shared/directives/hover-focus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReplaceUnderlinePipe,
    BookListComponent,
    BookRoutingComponent,
    AddBookComponent,
    HoverFocusDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [BookListComponent],
})
export class BookModule {}
