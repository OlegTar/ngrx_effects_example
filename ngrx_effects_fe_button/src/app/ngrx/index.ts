import { State } from './reducer';
import { createSelector } from '@ngrx/store';
import { MainState } from '../main-state';

function getStateFromMainState(mainState: MainState) {
    return mainState.main;
}

function getState_(state: State) {
    return state.state;
}

export function getState() {
    return createSelector(getStateFromMainState, getState_);
}
