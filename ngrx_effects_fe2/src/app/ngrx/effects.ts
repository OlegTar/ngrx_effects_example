import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as actions from './actions';
import { Message } from '../models/Message';
import { EffectErrorAction } from '../special-actions';

const url = 'http://localhost:60195/api/Messages/';

@Injectable()
export class MessageEffects {

    constructor(private http: HttpClient, private actions$: Actions) {}

    @Effect()
    requestGetMessagesAction$: Observable<Action> = this.actions$.pipe(
        ofType(actions.REQUEST_GET_MESSAGES),
        switchMap((action: actions.RequestGetMessagesAction) => {
            return this.http.get<Message[]>(url)
                .pipe(
                    map(messages => new actions.GetMessagesActionSuccess(messages)),
                    catchError(_ => of(new EffectErrorAction))
                );
        })
    );

    @Effect()
    addMessagesAction$: Observable<Action> = this.actions$.pipe(
        ofType(actions.REQUEST_ADD_MESSAGE),
        switchMap((action: actions.RequestAddMessageAction) => {
            const data = action.payload;
            const message: Message = {
                id: 0,
                data: data
            };

            return this.http.post<Message>(url, message)
                .pipe(
                    map(message_ => new actions.AddMessageActionSuccess(message_)),
                    catchError(_ => of(new EffectErrorAction))
                );
            }
        )
    );

    @Effect()
    deleteMessagesAction$: Observable<Action> = this.actions$.pipe(
        ofType(actions.REQUEST_DELETE_MESSAGE),
        switchMap((action: actions.RequestDeleteMessageAction) => {
            const id = action.payload;

            return this.http.delete(url + encodeURIComponent(id.toString()))
                .pipe(map(_ => new actions.DeleteMessageActionSuccess(null)));
            }
        ),
        catchError(_ => of(new EffectErrorAction))
    );
}
