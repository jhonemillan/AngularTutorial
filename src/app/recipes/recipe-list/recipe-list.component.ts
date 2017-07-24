import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ new Recipe("estofado", "Colombia food", "https://cdn.pixabay.com/photo/2017/04/04/00/36/japanese-food-2199962_960_720.jpg"),
                        new Recipe("arepas fritas", "Arepas fritas", "http://www.venezuelatuya.com/cocina/imagenes/arepas_fritas.jpg"),
                        new Recipe("Bandeja Paisa", "Frijoles, arroz, carne molida y mas", "http://cdn.colombia.com/sdi/2011/08/02/bandeja-paisa-500927.jpg")];
  constructor() { }

  ngOnInit() {
  }

}
