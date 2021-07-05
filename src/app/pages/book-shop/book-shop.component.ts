import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.scss']
})
export class BookShopComponent implements OnInit {
  filterBy = {term: ''}
  books$: Observable<Book[]>
  books: Book[]
  subscription: Subscription

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.subscription = this.bookService.books$.subscribe(books =>{
      console.log('books',books)
      this.books = books
    })
    this.bookService.loadBooks();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
