import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { FirstComponent } from './first/first.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    FirstComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(appRoutes),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
