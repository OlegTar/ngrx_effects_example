import * as layout from './reducer';
import { AppState } from '../../mapReducers';
import { createSelector } from '@ngrx/store';

export const LayoutGetMessage = createSelector(
    (state: AppState) => state.layout,
    layout.getMessage
);
