import { Component, OnInit, Input, Output } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Books[];
  listTitle = "List of books"
  constructor(private service: BooksService) { }

  ngOnInit() {
    this.service.findall().subscribe(resp => this.bookList = resp)
  }

  writeReview(){
    console.log("review write");
  }

}

