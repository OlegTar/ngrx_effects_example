import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import {switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as mainActions from './actions';
import * as laoyutActions from '../layout/ngrx/actions';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:60915/api/Layout';

@Injectable()
export class MainEffects {

  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  requestPostMessage$: Observable<Action> = this.actions$.pipe(
    ofType(mainActions.REQUEST_POST_MESSAGE),
    switchMap((action: mainActions.RequestPostMessage) => {
      return this.http.post(url, action.payload).pipe(
        switchMap((serverResponse: string) => from([
          new laoyutActions.ShowMessage('Message successfully saved!'),
          new mainActions.SuccessPostMessage(serverResponse),
        ])),
        catchError(() => of(new laoyutActions.ShowMessage('Error!!'))),
      );
    })
  );
}
