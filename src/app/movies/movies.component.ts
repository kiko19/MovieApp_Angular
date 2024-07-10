import { Component, OnInit } from '@angular/core';
import { HomedataService } from '../homedata.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  allMovies: any[] = [];
  constructor(private _homedataService: HomedataService) { }

  ngOnInit(): void {
    this._homedataService.geTrending("movie").subscribe(res => {
      this.allMovies = res.results;
      console.log(this.allMovies);
    })

  }

}
