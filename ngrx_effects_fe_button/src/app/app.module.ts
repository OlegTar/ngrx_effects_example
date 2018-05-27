import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer, initialState } from './ngrx/reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './ngrx/effects';
import { ButtonComponent } from './button/button.component';
import { OtherComponent } from './other/other.component';
import { appRoutes } from './app.routes';
import { MainStateReducerMap } from './main-state';

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
    StoreModule.forRoot(MainStateReducerMap),
    EffectsModule.forRoot([Effects])
  ],
  providers: [],
  bootstrap: [
    AppComponent,    
  ]
})
export class AppModule { }
