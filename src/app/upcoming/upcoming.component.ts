import { Component, OnInit } from '@angular/core';
import { HomedataService } from '../homedata.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  allMovies: any[] = [];
  constructor(private _homedataService: HomedataService) { }

  ngOnInit(): void {
    this._homedataService.getUpcoming().subscribe(res => {
      this.allMovies = res.results;
      console.log(this.allMovies);
    })

  }
}
