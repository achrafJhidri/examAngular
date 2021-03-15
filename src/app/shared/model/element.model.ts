import { Ingredient } from './ingredient.model';

export class Element {
  constructor(
    public name: string,
    public description: string,
    public img: string,
    public ingredients: Ingredient[]
  ) {}
}
