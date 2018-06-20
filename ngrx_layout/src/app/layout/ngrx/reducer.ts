import * as layoutActions from './actions';

export interface LayoutState {
    message: string;
}

export const initialState: LayoutState = {
    message: null
};

export function reducer(state: LayoutState = initialState, action: layoutActions.LayoutAction): LayoutState {
    switch (action.type) {
        case layoutActions.SHOW_MESSAGE: {
            return {
                ...state,
                message: action.payload
            };
        }

        case layoutActions.HIDE_MESSAGE: {
            return {
                ...state,
                message: null
            };
        }

        default:
           return state;
    }
}

export const getMessage = (state: LayoutState) => state.message;
