import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private _http: HttpClient) { }
  
  public getUsers() {
    return this._http.get(this.url);
  }

}
