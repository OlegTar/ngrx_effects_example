import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MainState } from './main-state';
import { Message } from './models/Message';
import { Subscription } from 'rxjs';
import { getMessages } from './ngrx';
import * as actions from './ngrx/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  messages: Message[];
  subscription = new Subscription();
  constructor(private store: Store<MainState>, private cdr: ChangeDetectorRef) {        
  }

  ngOnInit() {
    this.subscription.add(this.store.pipe(select(getMessages)).subscribe(
      messages => {
        this.messages = messages;
        this.cdr.detectChanges();
      }
    ));
    this.reload();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  reload() {
    this.store.dispatch(new actions.RequestGetMessagesAction(null));
  }

  addMessage(message: string) {
    this.store.dispatch(new actions.RequestAddMessageAction(message));
  }

  deleteMessage(id: number) {
    this.store.dispatch(new actions.RequestDeleteMessageAction(id));
  }
}
