import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { OtherComponent } from './other/other.component';

export const appRoutes: Routes = [
    { path: 'button', component: ButtonComponent },
    { path: 'other',  component: OtherComponent },
  ];
