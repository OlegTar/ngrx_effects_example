import { State } from './reducer';
import { createSelector } from '@ngrx/store';
import { MainState } from '../main-state';

const getMessageStateFromMain = (state: MainState) => state.main;
const getMessages_ = (state: State) => state.messages;

export const getMessages = createSelector(getMessageStateFromMain, getMessages_);
