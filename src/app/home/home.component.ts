import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from './../_services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  defaultMovies: any ;
  searchResult: any ;
  searchIndex: any;
  searchForm: FormGroup;

  constructor(private service: MovieService) {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
   }

  ngOnInit() {
    this.service.delaultMovies().subscribe(movies => {
      this.defaultMovies = movies;
      if (this.defaultMovies.Response === 'False') {
        this.ngOnInit();
      } else {
        this.searchIndex = 1;
      }
    });
  }

  getIndex() {
    return this.searchIndex; }

  searchBtn(keyword, index) {
    this.service.searchMovie(keyword, index).subscribe(movies => {
      this.searchResult = movies;
      if (this.searchResult.Response === 'True') {
        this.searchIndex++;
      } else {
        this.searchIndex = 1;
      }
    });
  }

}
