import { Action } from '@ngrx/store';
import { Message } from '../models/Message';

export const REQUEST_GET_MESSAGES = 'request get messages';
export const GET_MESSAGES_SUCCESS = 'get messages success';

export const REQUEST_ADD_MESSAGE = 'request add message';
export const ADD_MESSAGE_SUCCESS = 'add message success';

export const REQUEST_DELETE_MESSAGE = 'request delete message';
export const DELETE_MESSAGE_SUCCESS = 'delete message success';

export class RequestGetMessagesAction implements Action {
    type = REQUEST_GET_MESSAGES;
    constructor (public payload: null) {}
}

export class GetMessagesActionSuccess implements Action {
    type = GET_MESSAGES_SUCCESS;
    constructor (public payload: Message[]) {}
}

export class RequestAddMessageAction implements Action {
    type = REQUEST_ADD_MESSAGE;
    constructor (public payload: string) {}
}

export class AddMessageActionSuccess implements Action {
    type = ADD_MESSAGE_SUCCESS;
    constructor (public payload: Message) {}
}

export class RequestDeleteMessageAction implements Action {
    type = REQUEST_DELETE_MESSAGE;
    constructor (public payload: number) {}
}

export class DeleteMessageActionSuccess implements Action {
    type = DELETE_MESSAGE_SUCCESS;
    constructor (public payload: null) {}
}

export type MessageAction = RequestGetMessagesAction 
    | RequestAddMessageAction
    | RequestDeleteMessageAction
    | GetMessagesActionSuccess
    | AddMessageActionSuccess
    | DeleteMessageActionSuccess;
