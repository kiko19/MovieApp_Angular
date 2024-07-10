import { HomedataService } from './../homedata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movieDetails: any = '';
  constructor(private _activatedRoute: ActivatedRoute, private _homedataService: HomedataService) {
    let movieId = _activatedRoute.snapshot.params['id'];
    this._homedataService.getMovieDetails(movieId).subscribe(res => {
      this.movieDetails = res;
      console.log(this.movieDetails);

    })
  }

  ngOnInit(): void {
  }

}
