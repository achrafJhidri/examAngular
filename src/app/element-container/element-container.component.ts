import { Component, OnInit } from '@angular/core';
import { ElementService } from '../shared/service/element.service';
@Component({
  selector: 'app-element-container',
  templateUrl: './element-container.component.html',
  styleUrls: ['./element-container.component.css'],
  providers:[ ElementService]
})
export class ElementContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

