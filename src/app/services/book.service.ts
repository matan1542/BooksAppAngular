import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Book } from '../models/book.model';
import BOOKS from '../../assets/books-data/books.json'
@Injectable({
  providedIn: 'root'
})
export class BookService{
  private _booksDb: Book[] = BOOKS;
  private _books$ = new BehaviorSubject<Book[]>([])
  public books$ = this._books$.asObservable()
  constructor() { }

  public loadBooks(filterBy = null) {
    console.log(BOOKS)
    let books = this._booksDb;
    if (filterBy && filterBy.term) {
      books = this._filter(books, filterBy.term)
    }
    this._books$.next(books)
  }

  private _filter(books, term) {
    term = term.toLocaleLowerCase()
    return books.filter(book => {
      return book.name.toLocaleLowerCase().includes(term) ||
        book.phone.toLocaleLowerCase().includes(term) ||
        book.email.toLocaleLowerCase().includes(term)
    })
  }
}


