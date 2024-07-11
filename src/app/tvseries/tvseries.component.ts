import { Component, OnInit } from '@angular/core';
import { HomedataService } from '../homedata.service';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.scss']
})
export class TvseriesComponent implements OnInit {
  allTv: any[] = [];
  constructor(private _homedataService: HomedataService) { }

  ngOnInit(): void {
    this._homedataService.geTrending("tv").subscribe(res => {
      this.allTv = res.results;
      console.log(this.allTv);
    })

  }

}
