import { RouterModule, Route } from '@angular/router';

import { ElementContainerComponent } from './element-container.component';
import { ElementsDetailsComponent } from './element-details/element-details.component';
import { ElementEditComponent } from './element-edit/element-edit.component';
import { ElementListComponent } from './element-list/element-list.component';

const ELEMENT_ROUTES: Route[] = [
  {
    path: 'elements', component: ElementContainerComponent,
    children: [
      { path: '', component: ElementListComponent },
      { path: 'new', component: ElementEditComponent },
      { path: ':index', component: ElementsDetailsComponent },
      { path: ':index/edit', component: ElementEditComponent },
    ],
  },
];

export const elementRouting = RouterModule.forChild(ELEMENT_ROUTES);
