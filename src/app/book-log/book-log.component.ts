import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-log',
  templateUrl: './book-log.component.html',
  styleUrls: ['./book-log.component.css']
})
export class BookLogComponent {

  booksForm = new FormGroup({
    title: new FormControl(),
    aurther: new FormControl(),
    date: new FormControl(),
    rates: new FormControl()
  });

  constructor(private bookService: BooksService){}

  postBookNames(){
    console.log(this.booksForm.value);
      console.log(this.booksForm.value);
      this.bookService.postABoook(this.booksForm.value).subscribe(()=>{
      });
  }
}
