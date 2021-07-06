import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new Subject<Recipe>();

  recipes:Recipe[] = [
    new Recipe('hot dog', 'nice hot dog',
    'https://i.pinimg.com/originals/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg',
     [ new Ingredient('Meat?', 1)
    ]),
    new Recipe('not dog',
     'not a hot dog',
      'https://i.pinimg.com/originals/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg',
    [
      new Ingredient('not meat', 2),
      new Ingredient('buns', 2)
    ])
  ];


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {

    this.slService.addIngredients(ingredients);

  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
