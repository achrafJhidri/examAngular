import { Component, OnInit } from '@angular/core';

import { FilterPipe } from '../../shared/pipes/filters/filter.pipe';
import { Element } from 'src/app/shared/model/element.model';
import { ElementService } from 'src/app/shared/service/element.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css'],
  providers: [FilterPipe],
})
export class ElementListComponent implements OnInit {
  public search = '';
  public elements: Element[] = [];

  constructor(private elementService: ElementService,
              private router : Router) {}

  ngOnInit(): void {
    this.elementService.elements.subscribe((elements: Element[]) => {
      this.elements = elements;
    });
  }
  goToRandom() : void {
      const index = this.elementService.getRandom();
      this.router.navigateByUrl('/elements/'+index);
  }
}
