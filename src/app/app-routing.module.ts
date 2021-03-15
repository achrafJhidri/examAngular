import {Route, RouterModule } from '@angular/router';

const APP_ROUTE: Route[] = [
    { path : '', redirectTo : 'elements', pathMatch: 'full'},
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);

