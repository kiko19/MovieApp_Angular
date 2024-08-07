import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomedataService {
  //08177ff4d4503cb2f11d397a6f366874
  constructor(private _httpClient: HttpClient) { }
  geTrending(type: string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=08177ff4d4503cb2f11d397a6f366874`)
  }
  getUpcoming(): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=08177ff4d4503cb2f11d397a6f366874`)
  }
  getMovieDetails(id:any): Observable<any> {
     return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=08177ff4d4503cb2f11d397a6f366874`)
  }
  getTvDetails(id:any): Observable<any> {
     return this._httpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=08177ff4d4503cb2f11d397a6f366874`)
  }



}
