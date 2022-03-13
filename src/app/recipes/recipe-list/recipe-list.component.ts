import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Apple Pie", "Tasty Treat mmm", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Small_apple_pie_8.jpg/300px-Small_apple_pie_8.jpg"),
    new Recipe("Apple Pie", "Tasty Treat mmm", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Small_apple_pie_8.jpg/300px-Small_apple_pie_8.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
