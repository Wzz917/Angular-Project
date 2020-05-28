import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subsciption: Subscription;


  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor(private recipeService:RecipeService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subsciption = this.recipeService.recipesChanged.subscribe((recipes:Recipe[]) => {
      this.recipes = recipes; 
    });
    this.recipes = this.recipeService.getRecipes();
    
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  // onRecipeSelected(recipe:Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }
}
