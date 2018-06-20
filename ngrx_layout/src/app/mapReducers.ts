import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../environments/environment';
  import * as layout from './layout/ngrx/reducer';
  import * as main from './ngrx/reducer';

  export interface AppState {
    layout: layout.LayoutState;
    main: main.MainState;
  }

  export const reducers: ActionReducerMap<AppState> = {
    layout: layout.reducer,
    main: main.reducer
  };


  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
