import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Element } from 'src/app/shared/model/element.model';
import { ElementService } from 'src/app/shared/service/element.service';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.css'],
})
export class ElementsDetailsComponent implements OnInit {
  public selectedElement!: Element;
  public index!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private elementService: ElementService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const index = params.get('index');
      if (index) {
        this.index = +index;
      } else {
        this.index = 0;
      }

      this.elementService
        .getElement(this.index)
        .subscribe((element: Element) => {
          this.selectedElement = element;
        });
    });
  }
  getUrl(): string[] {
    return ['/elements', this.index + '', 'edit'];
  }
}
