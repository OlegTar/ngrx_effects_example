import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export interface State {
    router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
};

export function getRouter() {
    return createSelector((state: State) => state, state => state.router);
}