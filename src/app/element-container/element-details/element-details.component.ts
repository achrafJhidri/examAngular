import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ActiveDirective } from 'src/app/shared/directives/active.directive';
import { Element } from 'src/app/shared/model/element.model';
import { ElementService } from 'src/app/shared/service/element.service';
import { FilterPipe } from '../../shared/pipes/filters/filter.pipe';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css'],
})
export class ElementsDetailsComponent implements OnInit {
  @Input() public selectedElement!: Element;
  @Input() public index!: number;

  constructor(
    private router: Router,
    private elementService: ElementService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.index) {
      // if you're coming from the URL
      this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {
        this.index = + paramsMap.get('index');
        this.elementService
          .getElement(this.index)
          .subscribe((element: Element) => {
            if (element) {
              this.selectedElement = element;
            } else {
              this.router.navigateByUrl('/elements');
            }
          });
      });
    }
  }
  goToEdit(): void {
    this.router.navigateByUrl('/elements/' + this.index + '/edit');
  }
  deleteFilm(): void {
    this.elementService.deleteElement(this.index);
  }
}
