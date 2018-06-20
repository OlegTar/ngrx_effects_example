import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffects } from './ngrx/effects';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { State } from './ngrx/reducer';
import { MainStateReducers } from './main-state';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export function logger(reducer_: ActionReducer<State>): ActionReducer<any, any> {
  return function (state: State, action: any): State {
      console.log('state', state);
      console.log('action', action);

      return reducer_(state, action);
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(MainStateReducers, { metaReducers: [logger]}),
    EffectsModule.forRoot([MessageEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
