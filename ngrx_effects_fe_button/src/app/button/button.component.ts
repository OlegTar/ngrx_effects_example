import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MainState } from '../main-state';
import * as actions from '../ngrx/actions'
import { Subscription } from 'rxjs';
import { RequestState } from '../models/request-state';
import { getState } from '../ngrx';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  stateEnum = RequestState;
  state: RequestState;

  constructor(private store: Store<MainState>, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription.add(this.store.pipe(select(getState())).subscribe(state => {
      this.state = state;
      this.cdr.detectChanges();
    }));

    //this.store.dispatch(new actions.ResetAction());
  }

  ngOnDestroy() {
    this.store.dispatch(new actions.ResetAction());
    this.subscription.unsubscribe();
  }

  click() {
    this.store.dispatch(new actions.RequestAction());
  }
}
