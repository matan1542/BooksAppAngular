import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BookShopComponent } from './pages/book-shop/book-shop.component';
import { HeaderComponent } from './cmps/header/header.component';
import { BooksListComponent } from './cmps/books-list/books-list.component';
import { BookPreviewComponent } from './cmps/book-preview/book-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookShopComponent,
    HeaderComponent,
    BooksListComponent,
    BookPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
