import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AddBookComponent, Book } from './add-book.component';

describe('Component: AddBook"', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let submitEl: DebugElement;
  let titleEl: DebugElement;
  let passEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBookComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));
    titleEl = fixture.debugElement.query(By.css('input[type=text]'));
    passEl = fixture.debugElement.query(By.css('input[type=password]'));
  });

  it('should create component truthly', () => {
    expect(component).toBeTruthy();
  });

  it('should set enabled to false disables the submit button', () => {
    expect(submitEl.nativeElement.disabled).toBeFalsy();
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  it('should after Entering title and password emits loggedIn event', () => {
    let book: Book | any;
    titleEl.nativeElement.value = 'test book';
    passEl.nativeElement.value = '123456';
    component.loggedIn.subscribe((value) => {
      book = value;
    });
    submitEl.triggerEventHandler('click', null);
    expect(book.title).toBe('test book');
    expect(book.password).toBe('123456');
  });
});
