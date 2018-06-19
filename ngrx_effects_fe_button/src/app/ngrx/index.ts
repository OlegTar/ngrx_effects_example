import { createSelector } from '@ngrx/store';
import { MainState } from '../main-state';
import * as button from './reducer';

function getStateFromMainState(mainState: MainState) {
    return mainState.main;
}

export function getState() {
    return createSelector(getStateFromMainState, button.getState);
}
