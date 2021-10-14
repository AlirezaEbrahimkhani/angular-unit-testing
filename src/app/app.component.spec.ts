import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Component: App', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create component truthly', () => {
    expect(component).toBeTruthy();
  });

  it('title property should have $practice-theme$ value' , () => {
    expect(component.title).toBe('practice-theme');
  })

  it('should render a $practice-theme$ as title in html', () => {
    fixture.detectChanges();
    const compiledHTML = fixture.nativeElement as HTMLElement;
    expect(compiledHTML.querySelector('.title')?.textContent).toContain(
      'practice-theme'
    );
  });
});
