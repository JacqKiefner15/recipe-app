import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[];


  constructor() { }

  ngOnInit(): void {

  }

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded( ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
