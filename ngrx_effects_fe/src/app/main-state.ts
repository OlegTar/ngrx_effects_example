import { State, reducer } from './ngrx/reducer';
import { ActionReducerMap } from '@ngrx/store';
import { MessageAction } from './ngrx/actions';

export interface MainState {
    main: State;
}

export const MainStateReducers: ActionReducerMap<MainState, MessageAction> = {
    main: reducer
};
