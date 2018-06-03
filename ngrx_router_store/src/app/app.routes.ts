import { Routes } from '@angular/router';
import { OtherComponent } from "./other/other.component";
import { FirstComponent } from "./first/first.component";

export const appRoutes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'first', component: FirstComponent },
    { path: 'other', component: OtherComponent },
];