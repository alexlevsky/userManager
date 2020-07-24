import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType('[Users Component] Get Remote User'),
    mergeMap(action =>
      this.http.get('/assets/users.json', action).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: '[Users Component] Get Remote Users Success', payload: data })),
        // If request fails, dispatch failed action
        catchError(() => of({ type: '[Users Component] Get Remote Users Failed' }))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
