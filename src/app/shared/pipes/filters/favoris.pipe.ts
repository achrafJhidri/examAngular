import { Pipe, PipeTransform } from '@angular/core';
import { Element } from '../../model/element.model';

@Pipe({
  name: 'favoris',
})
export class FavorisPipe implements PipeTransform {
  transform(elements: Element[]): Element[] {
    if (!elements) return [];
    return elements.filter((element: Element) => element.isFav);
  }
}
