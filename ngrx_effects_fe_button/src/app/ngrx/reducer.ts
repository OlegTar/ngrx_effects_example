import { RequestState } from '../models/request-state';
import * as actions from './actions';

export interface State {
    state: RequestState;
}

export const initialState: State = {
    state: RequestState.Idle
};

export function reducer (state: State = initialState, action: actions.MyActions): State {
    switch (action.type) {
        case actions.REQUEST: {
            return {
                ...state,
                state: RequestState.Pending
            };
        }

        case actions.SUCCESS: {
            return {
                ...state,
                state: RequestState.Success
            };
        }

        case actions.ERROR: {
            return {
                ...state,
                state: RequestState.Error
            };
        }

        case actions.RESET: {
            return {
                ...state,
                state: RequestState.Idle
            };
        }

        default:
            return state;
    }
}
