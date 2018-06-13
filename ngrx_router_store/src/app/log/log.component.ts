import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getRouter } from '../ngrx/state';
import { Subscription } from 'rxjs';
import { RouterStateUrl } from '../ngrx/state';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  logs: {
    state: RouterStateUrl,
    navigationId: number
  }[] = [];

  constructor(
    private store: Store<State>,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.subscription.add(this.store.pipe(select(getRouter()))
    .subscribe(routerState => {
      this.logs.push(routerState);
      this.cdr.detectChanges();
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
