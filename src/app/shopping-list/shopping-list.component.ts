import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Frijoles", 1),
    new Ingredient("Arroz", 2)
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
