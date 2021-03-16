import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Element } from '../model/element.model';

@Injectable()
export class ElementService {
  public elements: BehaviorSubject<Element[]> = new BehaviorSubject(Array<Element>());
  constructor(private httpClient: HttpClient) {
    this.initElement();
  }

  initElement(): void {
    this.httpClient
      .get<Element[]>(
        'https://dbexam-ea7d3-default-rtdb.europe-west1.firebasedatabase.app/films.json'
      )
      .subscribe((elements: Element[]) => this.elements.next(elements));
  }

  getElement(index: number): Observable<Element> {
    return this.elements.pipe(
      filter((elements: Element[]) => elements !== null),
      map((elements: Element[]) => elements[index])
    );
  }

  addElement(element: Element): void {
    const current = this.elements.value ;
    const elements = current ? current.slice() : [] ;
    elements.push(
      new Element(
        element.name,
        element.description,
        element.img,
        // element.ingredients.map(
        //   (ingredient) => new Ingredient(ingredient.name, ingredient.quantity)
        // )
      )
    );
    this.elements.next(elements);

    this.save();
  }
  editElement(editedElement: Element): void {
    const elements = this.elements.value.slice();
    const index = elements.map((c) => c.name).indexOf(editedElement.name);

    elements[index] = editedElement;
    this.elements.next(elements);

    this.save();
  }

  deleteElement(index : number ) : void {
    const current = this.elements.value ;
    const elements = current ? current.slice() : [] ;
    elements.splice(index,1);
    this.elements.next(elements);
    this.save();
  }
  
  save(): void {
    this.httpClient
      .put(
        'https://dbexam-ea7d3-default-rtdb.europe-west1.firebasedatabase.app/films.json',
        this.elements.value
      )
      .subscribe();
  }
}
