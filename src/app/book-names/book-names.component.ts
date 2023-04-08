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
    bookTableHeaders: any[] =["Title","Aurther","Date","Rating"];

    getAllBooks(){
        this.bookService.getAllBooks().subscribe((data)=>{
             this.books = data;
        })
    }

    constructor(private bookService: BooksService){}

    ngOnInit(): void {
      this.getAllBooks(); 
    }
}
