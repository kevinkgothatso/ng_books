import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url: any = "http://localhost:4000/books";

  constructor(private http: HttpClient) { }

  getAllBooks():Observable<Books[]>{
     return this.http.get<Books[]>(`${this.url}`);
  }

  postABoook(book:any): Observable<any>{
    console.log(book);
      return this.http.post<any>(`${this.url}/new`, book);
  }
}
