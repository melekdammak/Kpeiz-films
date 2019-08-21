import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  randomWords = require('random-words');
  constructor(private http: HttpClient) { }
  delaultMovies() {
    const randomWord = this.randomWords();
    return this.http.get('http://www.omdbapi.com/?s=' + randomWord + '&type=movie&page=1&apiKey=295e6386');
  }

  getMovie(id) {
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apiKey=295e6386`);
  }

  searchMovie(keyword, index) {
    return this.http.get(`http://www.omdbapi.com/?s=${keyword.value.search}&type=movie&page=${index}&apiKey=295e6386`);
  }
}
