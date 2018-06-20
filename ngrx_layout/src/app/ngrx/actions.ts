import { Action } from '@ngrx/store';

export const REQUEST_POST_MESSAGE = '[main] request post message';
export const SUCCESS_POST_MESSAGE = '[main] success post message';

export class RequestPostMessage implements Action {
    type = REQUEST_POST_MESSAGE;

    constructor (public payload: string) {}
}

export class SuccessPostMessage implements Action {
    type = SUCCESS_POST_MESSAGE;

    constructor (public payload: string) {}
}

export type MainAction = RequestPostMessage | SuccessPostMessage;
