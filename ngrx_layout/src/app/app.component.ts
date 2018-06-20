import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './mapReducers';
import { Observable } from 'rxjs';
import { MainGetMessage } from './ngrx';
import { RequestPostMessage } from './ngrx/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message$: Observable<string>;
  constructor(public store: Store<AppState>) {}

  ngOnInit() {
    this.message$ = this.store.pipe(select(MainGetMessage));
  }

  send(value: string) {
    this.store.dispatch(new RequestPostMessage(value));
  }
}
