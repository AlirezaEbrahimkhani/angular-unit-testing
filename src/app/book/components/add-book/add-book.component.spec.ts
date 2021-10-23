import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddBookComponent, User } from './add-book.component';

describe('Component: AddBook"', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let submitEl: DebugElement;
  let emailEl: DebugElement;
  let passEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [AddBookComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));
    emailEl = fixture.debugElement.query(By.css('input[type=email]'));
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

  it('should form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should email field required validity to be Truthly', () => {
    let errors: any = {};
    let email = component.form.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it("should fail email field pattert validity" , () => {
    let error: any = {};
    let email = component.form.controls["email"]
    email.setValue("test");
    error = email.errors || {}
    expect(error['pattern']).toBeTruthy();
  })

  // it('should after Entering title and password emits loggedIn event', () => {
  //   let book: User | any;
  //   emailEl.nativeElement.value = 'test@test.com';
  //   passEl.nativeElement.value = '123456';
  //   component.loggedIn.subscribe((value) => {
  //     book = value;
  //   });
  //   console.log(book);
  //   submitEl.triggerEventHandler('click', null);
  //   expect(book.email).toBe('test@test.com');
  //   expect(book.password).toBe('123456');
  // });
});
