import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Element } from 'src/app/shared/model/element.model';
import { ElementService } from 'src/app/shared/service/element.service';

@Component({
  selector: 'app-element-edit',
  templateUrl: './element-edit.component.html',
  styleUrls: ['./element-edit.component.css'],
})
export class ElementEditComponent implements OnInit {
  public elementForm!: FormGroup;
  private element!: Element;
  private edit!: boolean;
  constructor(
    private fb: FormBuilder,
    private elementService: ElementService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {
      const index = paramsMap.get('index');
      if (index) {
        this.edit = true;
        this.elementService
          .getElement(+index)
          .subscribe((c) => (this.element = c));
        this.initForm(this.element);
      } else {
        this.edit = false;
        this.initForm();
      }
    });
  }
  private initForm(
    element: Element = { name: '', img: '', description: '' }
  ): void {
    this.elementForm = this.fb.group({
      name: [element.name, Validators.required],
      img: [element.img, Validators.required],
      description: [element.description],
      // ingredients: this.initIngredientsForm(element),
    });
  }

  // private initIngredientsForm(element: Element): any {
  //   if (element.ingredients) {
  //     return new FormArray(
  //       element.ingredients.map((ingredient: Ingredient) => {
  //         return new FormGroup({
  //           name: new FormControl(ingredient.name),
  //           quantity: new FormControl(ingredient.quantity),
  //         });
  //       })
  //     );
  //   }
  // }

  createElement(): void {
    if (!this.edit) {
      this.elementService.addElement(this.elementForm.value);
    } else {
      this.activatedRoute.paramMap.subscribe((paramsMap: ParamMap) => {
        
        const index = paramsMap.get('index');
        let elm: Element;
        this.elementService.getElement(+index).subscribe((el) => {
          elm = el;
          
          
          const foundElemDuplicateName = this.elementService.elements.value.findIndex(
            (film) =>
              film !== elm &&
              film.name === this.elementForm.controls['name'].value
          );

            // console.log(foundElemDuplicateName)
  

          if (foundElemDuplicateName === -1) {
            // this.elementService.editElement(this.elementForm.value);
            console.log("not found a duplicated name")
          } else {
            console.log('duplicated Name');
          //   this.elementForm.controls['name'].setErrors({'invalid': true})
          }

        });
      });
    }
    this.router.navigate([
      '/elements',
      this.elementService.elements.value.length - 1,
    ]);
  }

  // getIngredients(): AbstractControl[] {
  //   return (this.elementForm.get('ingredients') as FormArray).controls;
  // }
}
