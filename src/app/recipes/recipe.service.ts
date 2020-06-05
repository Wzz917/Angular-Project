import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Stir Fry', 
    //     'Very good', 
    //     'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
    //      [new Ingredient('Meat', 20), new Ingredient('Lettuce', 5), new Ingredient('Shrimp', 20)]),
    //     new Recipe('Fried Chicken Wings', 
    //     'Very Delicious', 
    //     "https://spicysouthernkitchen.com/wp-content/uploads/Spicy-Fried-Chicken-Wings-5.jpg",
    //      [new Ingredient('Chicken wing', 10), new Ingredient('oil', 10)]),
    //      new Recipe('Beef Noodles', 
    //     'Too good', 
    //     "https://www.foodrepublic.com/wp-content/uploads/2016/02/beefnoodles.jpg",
    //      [new Ingredient('noodles', 20), new Ingredient('beef', 10)])
    //   ];

    private recipes: Recipe[] = [];

    constructor(private shoppingListService:ShoppingListService) {

    }

    setRecipe(recipes:Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
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

    addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }


    deleteRecipe(index:number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}