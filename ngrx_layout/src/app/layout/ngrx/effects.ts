import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import {switchMap, map, catchError, merge, delay } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as layoutActions from './actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LayoutEffects {

  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  requestPostMessage$: Observable<Action> = this.actions$.pipe(
    ofType(layoutActions.SHOW_MESSAGE),
    switchMap((action: layoutActions.ShowMessage) => {
        return of(new layoutActions.HideMessage(null)).pipe(delay(5000));
    })
  );
}
