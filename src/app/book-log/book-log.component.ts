import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Books } from '../books';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private bookService: BooksService, private router: Router){}

  postBookNames(){
      this.bookService.postABoook(this.booksForm.value).subscribe((res)=>{
            if(res.success){
              this.router.navigate(['/home/book-names']);
            }
      });
  }
}
