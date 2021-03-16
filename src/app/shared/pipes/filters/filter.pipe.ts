import { Pipe, PipeTransform } from '@angular/core';
import { Element } from '../../model/element.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(elements: Element[], search: string ): Element[]  {
    if (!search.length) {
       return elements;
    }
    else {
      return elements.filter((element: Element) =>
      element.name.toLowerCase().includes(search.toLowerCase()) ||
      element.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  }

}
