import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './books'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  findall():Observable<Books[]>{
    return this.http.get<Books[]>('http://localhost:3000/books')
  }
}
//https://github.com/tamingtext/book/blob/master/apache-solr/example/exampledocs/books.json
//https://www.hongkiat.com/blog/goodreads-ratings-api/
//https://github.com/public-apis/public-apis#books