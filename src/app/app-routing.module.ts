import {Route, RouterModule } from '@angular/router';
import { FavorisComponent } from './favoris/favoris.component';

const APP_ROUTE: Route[] = [
    { path : '', redirectTo : 'elements', pathMatch: 'full'},
    { path : 'favoris', component: FavorisComponent,pathMatch: 'full'}
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);

