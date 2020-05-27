import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index:number) {
    this.shoppingListService.startedEditing.next(index);
  }


  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

  // onIngredientAdded(ingredient:Ingredient) {
  //   this.ingredients.push(ingredient);
  //   console.log("test");
  // }

}
