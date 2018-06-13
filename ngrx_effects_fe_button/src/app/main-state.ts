import { State, reducer } from './ngrx/reducer';
import { ActionReducerMap, Action } from '@ngrx/store';


export interface MainState {
    main: State;
}

export const MainStateReducerMap: ActionReducerMap<MainState, Action> = {
    main: reducer
};
