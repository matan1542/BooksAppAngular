import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BookShopComponent } from './pages/book-shop/book-shop.component';
import { HeaderComponent } from './cmps/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookShopComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
