import { Action } from "@ngrx/store";

export const REQUEST = 'request';
export const SUCCESS = 'success';
export const ERROR = 'error';
export const RESET = 'reset';

export class RequestAction implements Action {
    type = REQUEST;
}

export class SuccessAction implements Action {
    type = SUCCESS;
}

export class ErrorAction implements Action {
    type = ERROR;
}

export class ResetAction implements Action {
    type = RESET;
}

export type MyActions = RequestAction 
    | SuccessAction
    | ErrorAction
    | ResetAction;
