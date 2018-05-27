import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffects } from './ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducer';
import { MainStateReducers } from './main-state';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(MainStateReducers),
    EffectsModule.forRoot([MessageEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
