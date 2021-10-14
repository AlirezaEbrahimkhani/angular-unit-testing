import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceUnderlinePipe } from './shared/pipes/replace-underline.pipe';
import { BookListComponent } from './components/book-list/book-list.component';
import { MatCardModule } from '@angular/material/card';
import { BookRoutingComponent } from './book-routing.component';
import { BookRoutingModule } from './book.routing';

@NgModule({
  declarations: [ReplaceUnderlinePipe, BookListComponent, BookRoutingComponent],
  imports: [CommonModule, MatCardModule, BookRoutingModule],
  exports: [BookListComponent],
})
export class BookModule {}
