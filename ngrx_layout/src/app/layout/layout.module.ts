import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent
  ],
  declarations: [AlertComponent]
})
export class LayoutModule { }
