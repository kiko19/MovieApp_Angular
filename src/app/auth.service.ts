import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  register(registerData:any):Observable <any>{
    return this._httpClient.post("https://route-egypt-api.herokuapp.com/signup",registerData)
  }
}
