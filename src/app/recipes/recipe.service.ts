import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Stir Fry', 
        'Very good', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
         [new Ingredient('Meat', 1), new Ingredient('Lettuce', 1)]),
        new Recipe('Another Test Recipe', 
        'Very bad', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
         [new Ingredient('Meat', 1)])
      ];

    constructor(private shoppingListService:ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}