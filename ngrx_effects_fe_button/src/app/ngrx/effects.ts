import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from "@ngrx/store";
import * as actions from '../ngrx/actions';

const url = 'http://localhost:60195/api/Random';

@Injectable()
export class Effects {
    constructor(public http: HttpClient, private actions$: Actions) {
    }

    @Effect()
    request$: Observable<Action> = this.actions$.pipe(
        ofType(actions.REQUEST),
        switchMap((action: actions.RequestAction) => {
            return this.http.get(url).pipe(
                map(_ => new actions.SuccessAction()),
                catchError(_ => of(new actions.ErrorAction()))
            );
        })
    );
}