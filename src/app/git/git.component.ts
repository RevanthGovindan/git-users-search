import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  constructor(private http: HttpClient) { }
  arr = [];
  ngOnInit() {
    const p = 1;
  }
  search = function(event) {
    this.arr = [];
    let i = 0;
    const word = this.word;
    this.http.get('https://api.github.com/search/users?q=' + word).subscribe(res => {
      for ( i = 0; i < res.items.length; i++ ) {
        const body = { name: res.items[i].login, image: res.items[i].avatar_url, score: res.items[i].score};
        this.arr.push(body);
      }
    });
  };
  // tslint:disable-next-line:member-ordering
}
