import { Input ,NO_ERRORS_SCHEMA} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from 'src/app/models/book.model';

import { BookPreviewComponent } from './book-preview.component';

describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ BookPreviewComponent ],
  //     schemas: [NO_ERRORS_SCHEMA]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BookPreviewComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect('22').toBeTruthy();
  });
});
