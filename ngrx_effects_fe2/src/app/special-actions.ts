import { Action } from '@ngrx/store';

export class EffectErrorAction implements Action {
    type = 'Effect Error';
}

export class EffectSuccessAction implements Action {
    type = 'Effect Success';
}
