import { HomedataService } from './../homedata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMovies: any[] = [];
  tvMovies: any[] = [];
  peopleMovies: any[] = [];

  constructor(private _homedataService: HomedataService) { }

  ngOnInit(): void {
    this._homedataService.geTrending("movie").subscribe(res => {
      this.allMovies = res.results.slice(0,10);
    })
    this._homedataService.geTrending("tv").subscribe(res => {
      this.tvMovies = res.results.slice(0,10);

    })
    this._homedataService.geTrending("person").subscribe(res => {
      this.peopleMovies = res.results.slice(0,10);
    })

  }

}
