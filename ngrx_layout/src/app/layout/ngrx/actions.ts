import { Action } from '@ngrx/store';

export const SHOW_MESSAGE = '[layout] show message';
export const HIDE_MESSAGE = '[layout] hide message';

export class ShowMessage implements Action {
  readonly type = SHOW_MESSAGE;

  constructor (public payload: string) {}
}

export class HideMessage implements Action {
  readonly type = HIDE_MESSAGE;

  constructor (public payload: null) {}
}

export type LayoutAction = ShowMessage | HideMessage;
