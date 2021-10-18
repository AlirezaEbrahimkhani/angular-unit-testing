import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRoutingComponent } from './book-routing.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';

const ROUTES: Routes = [
  {
    path: '',
    component: BookRoutingComponent,
    children: [
      {
        path: 'list',
        component: BookListComponent,
      },
      {
        path: 'add',
        component: AddBookComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
