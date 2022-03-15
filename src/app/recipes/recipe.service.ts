import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("Apple Pie",
        "Tasty Treat mmm",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Small_apple_pie_8.jpg/300px-Small_apple_pie_8.jpg",
        [
            new Ingredient('Apple', 5),
            new Ingredient('Dough', 1),
            new Ingredient('Sugar', 1)
        ]),
        new Recipe("Banana Pie",
        "Tasty Treat mmm",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Small_apple_pie_8.jpg/300px-Small_apple_pie_8.jpg",
        [
            new Ingredient('Banana', 5),
            new Ingredient('Dough', 1),
            new Ingredient('Sugar', 1)
        ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}