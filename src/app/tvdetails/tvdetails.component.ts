import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomedataService } from '../homedata.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {
  tvDetails: any = '';
  constructor(private _activatedRoute: ActivatedRoute, private _homedataService: HomedataService) {
    let tvId = _activatedRoute.snapshot.params['id'];
    this._homedataService.getTvDetails(tvId).subscribe(res => {
      this.tvDetails = res;
      console.log(this.tvDetails);

    })
  }
  ngOnInit(): void {
  }

}
