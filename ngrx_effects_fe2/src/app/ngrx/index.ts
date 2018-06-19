import { State } from './reducer';
import { createSelector } from '@ngrx/store';
import { MainState } from '../main-state';
import * as messages from './reducer';

const getMessageStateFromMain = (state: MainState) => state.main;

export const getMessages = createSelector(getMessageStateFromMain, messages.getMessages);
