import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('Service: Book', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should create book service truthly', () => {
    expect(service).toBeTruthy();
  });

  it('should set item to localStorage', () => {
    service['_setItemToLocalStorage']('alireza', 'ebrahimkhani');
    let storedDataInLocalStorage = localStorage.getItem('alireza');
    expect(storedDataInLocalStorage).toBe('ebrahimkhani');
  });

  it('should read value $test localstorage$ with key of x from localstorage' , () => {
    localStorage.setItem("x" , "test localstorage")
    expect(service.readItemFromLocalStorage('x')).toBe('test localstorage');
  })

  it('should remove value $test localstorage$ with key of x from localstorage' , () => {
    localStorage.setItem("x" , "test localstorage")
    service.removeItemFromLocalStorage('x');
    expect(localStorage.getItem('x')).toBeNull();
  })
});
