import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BookService } from '../../shared/services/book.service';

import { BookListComponent } from './book-list.component';

describe('Component: BookList', () => {
  let component: BookListComponent;
  let service: BookService;
  let spy: any;
  let el: DebugElement;
  let fixture: ComponentFixture<BookListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BookListComponent)
    service = TestBed.inject(BookService);
    component = fixture.componentInstance;
    el = fixture.debugElement
  });

  it('should create component truthly', () => {
    expect(component).toBeTruthy();
  });

  it('should return true when store has book', () => {
    expect(service.hasBookInStore()).toBeTrue();
  });

  it('should return false when store is empty', () => {
    service.books = [];
    expect(service.hasBookInStore()).toBeFalse();
  });

  it('Spy : should return true when store has book', () => {
    spy = spyOn(service, 'hasBookInStore').and.returnValue(true);
    expect(component.bookInStore()).toBeTrue();
    expect(spy).toHaveBeenCalled();
  });

  it('Spy : should return false when store has book', () => {
    service.books = [];
    spy = spyOn(service, 'hasBookInStore').and.returnValue(false);
    expect(component.bookInStore()).toBeFalse();
    expect(spy).toHaveBeenCalled();
  });

  it('should display $Book In Store$ when book is in Store' , () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Book In Store')
  })

  it('should display $Book Not In Store$ when book is in Store' , () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges()
    expect(el.nativeElement.textContent.trim()).toBe('Book In Store');
    spyOn(service, 'hasBookInStore').and.returnValue(false);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Book Not In Store');
  })
});