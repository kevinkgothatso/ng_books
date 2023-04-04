import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-names',
  templateUrl: './book-names.component.html',
  styleUrls: ['./book-names.component.css']
})
export class BookNamesComponent implements OnInit{
    books: any;
    bookTableHeaders: any[] =["title","aurther","date","rates"];

    getAllBooks(){
        this.bookService.getAllBooks().subscribe((data)=>{
             this.books = data;
             console.log(this.books);
        })
    }

    constructor(private bookService: BooksService){}

    ngOnInit(): void {
      this.getAllBooks(); 
    }
}
