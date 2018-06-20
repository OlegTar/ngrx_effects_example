import * as actions from './actions';
import {MainAction} from './actions';

export interface MainState {
  message: string;
}

export const initialState: MainState = {
  message: null
};

export function reducer(state = initialState, action: actions.MainAction): MainState {
  switch (action.type) {
    // case actions.REQUEST_POST_MESSAGE: {
    //   return {
    //     ...state,
    //     message: null
    //   };
    // }
    case actions.SUCCESS_POST_MESSAGE: {
      return {
        ...state,
        message: action.payload
      };
    }

    default:
      return state;
  }
}

export const getMessage = (state: MainState) => state.message;
