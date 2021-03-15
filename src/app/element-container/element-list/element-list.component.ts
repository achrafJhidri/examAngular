import { Component, OnInit } from '@angular/core';

import { FilterPipe } from '../../shared/pipes/filters/filter.pipe';
import { Element } from 'src/app/shared/model/element.model';
import { ElementService } from 'src/app/shared/service/element.service';
@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css'],
  providers: [FilterPipe],
})
export class ElementListComponent implements OnInit {
  public search = '';
  public elements: Element[] = [];

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.elements.subscribe((elements: Element[]) => {
      this.elements = elements;
    });
  }
}
