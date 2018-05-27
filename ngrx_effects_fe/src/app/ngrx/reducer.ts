import * as actions from './actions';
import { Message } from '../models/Message';
import { INITIAL_STATE, Action } from '@ngrx/store';

export interface State {
    messages: Message[];
}

export const initialState: State = {
    messages: null
}

export function reducer(state: State = initialState, action: actions.MessageAction): State {
    switch(action.type) {
        case actions.REQUEST_GET_MESSAGES: {
            return {
                ...state,
                messages: null
            }
        }

        case actions.GET_MESSAGES_SUCCESS: {
            return {
                ...state,
                messages: <Message[]>action.payload
            }
        }

        case actions.ADD_MESSAGE_SUCCESS: {
            const newMessage = <Message>action.payload;
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }

        case actions.REQUEST_DELETE_MESSAGE: {
            const id = action.payload;
            const pos = state.messages.findIndex(message => message.id === id);

            return {
                ...state,
                messages: [
                    ...state.messages.slice(0, pos), 
                    ...state.messages.slice(pos + 1)
                ]
            }
        }

        default:
            return state
    }
}
