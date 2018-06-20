import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../mapReducers';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LayoutGetMessage } from '../ngrx';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  message: string;
  subscriptions = new Subscription();
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.subscriptions.add(this.store.pipe(select(LayoutGetMessage)).subscribe(message => {
      this.message = message;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
