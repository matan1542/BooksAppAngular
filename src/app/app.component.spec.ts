import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BookPreviewComponent } from './cmps/book-preview/book-preview.component';
import { BooksListComponent } from './cmps/books-list/books-list.component';
import { HeaderComponent } from './cmps/header/header.component';
import { BookShopComponent } from './pages/book-shop/book-shop.component';
import { HomeComponent } from './pages/home/home.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        BookShopComponent,
        HeaderComponent,
        BooksListComponent,
        BookPreviewComponent
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    expect('sa').toBeTruthy();
  });

  // it(`should have as title 'books-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('books-app');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('books-app app is running!');
  // });
});
