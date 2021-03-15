import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementListComponent } from './element-list/element-list.component';
import { ElementsDetailsComponent } from './element-details/element-details.component';
import { ElementContainerComponent } from './element-container.component';
import { FilterPipe } from '../shared/pipes/filters/filter.pipe';
import { ElementEditComponent } from './element-edit/element-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { elementRouting } from './element.routing';
import { ActiveDirective } from '../shared/directives/active.directive';



@NgModule({
  declarations: [
    ElementListComponent,
    ElementsDetailsComponent,
    ElementContainerComponent,
    ElementEditComponent,
    FilterPipe,
    ActiveDirective,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    elementRouting
  ],
  providers : [],
  exports : []
})
export class ElementModule { }
