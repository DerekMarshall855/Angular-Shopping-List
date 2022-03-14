import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Apple Pie", "Tasty Treat mmm", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Small_apple_pie_8.jpg/300px-Small_apple_pie_8.jpg"),
    new Recipe("Banana Pie", "Tasty Treat mmm", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Small_apple_pie_8.jpg/300px-Small_apple_pie_8.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
