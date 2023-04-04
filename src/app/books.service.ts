import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url: any = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  getAllBooks():Observable<Books[]>{
     return this.http.get<Books[]>(`${this.url}/books`);
  }

  postABoook(book: any){
      // return this.http.post<Books>(this.url, book);
  }
}
