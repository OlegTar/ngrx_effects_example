import { createSelector } from '@ngrx/store';
import { AppState } from '../mapReducers';
import { MainState } from './reducer';

export const MainGetMessage = createSelector(
    (state: AppState) => state.main,
    (state: MainState) => state.message
);
