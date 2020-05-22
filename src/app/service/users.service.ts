import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "https://jsonplaceholder.typicode.com/users";
 // private url: string = 'http://localhost:4208/users';
  constructor(private _http: HttpClient) { }
  
  // tslint:disable-next-line:ban-types
  public getUsers(): Observable<User[]> {
    // tslint:disable-next-line:ban-types
    return this._http.get<User[]>(this.url);
  }
}
