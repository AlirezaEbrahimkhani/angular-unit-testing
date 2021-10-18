import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddBookComponent } from '../../components/add-book/add-book.component';
import { HoverFocusDirective } from './hover-focus.directive';

describe('Directive: HoverFocus', () => {
  let directive: HoverFocusDirective;
  let fixture: ComponentFixture<AddBookComponent>;
  let labelEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverFocusDirective, AddBookComponent],
    }).compileComponents();
    directive = new HoverFocusDirective();
    fixture = TestBed.createComponent(AddBookComponent);
    labelEl = fixture.debugElement.query(By.css('label'));
  });

  it('should create an instance of hoverFocus truthly', () => {
    expect(directive).toBeTruthy();
  });

  it('should hover over the label', () => {
    expect(labelEl.nativeElement.style.backgroundColor).toBe('');
    labelEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(labelEl.nativeElement.style.backgroundColor).toBe('blue');
    labelEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(labelEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
