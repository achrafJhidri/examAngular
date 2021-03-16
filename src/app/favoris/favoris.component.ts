import { Component, OnInit } from '@angular/core';
import { ElementService } from '../shared/service/element.service';
import {Element } from '../shared/model/element.model'
@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  public favoris! : Element[] ;
  constructor(private elementService : ElementService) {
   }

  ngOnInit(): void {
    void this.elementService.elements.subscribe(elms => {
      this.favoris= elms;
    });
 
  }
  getFavoris() : Element[] {
    return this.favoris ;
  }

}
