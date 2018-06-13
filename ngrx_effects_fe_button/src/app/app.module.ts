import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './ngrx/effects';
import { ButtonComponent } from './button/button.component';
import { OtherComponent } from './other/other.component';
import { appRoutes } from './app.routes';
import { MainStateReducerMap } from './main-state';
import { State } from './ngrx/reducer';

export function logger(reducer_: ActionReducer<State>): ActionReducer<any, any> {
  return function (state: State, action: any): State {
      console.log('state', state);
      console.log('action', action);

      return reducer_(state, action);
  };
}
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(MainStateReducerMap, { metaReducers: [logger]}),
    EffectsModule.forRoot([Effects])
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
