import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book = {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  getBookDetails(id) {
    this.api.getBook(id).subscribe(data => {
      console.log(data);
      this.book = data;
    });
  }

  deleteBook(id){
    this.api.deleteBook(id).subscribe(res => {
      this.router.navigate(['/books']);
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

}
