import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Test name 1', 'This is the test description', 
    'https://static.toiimg.com/thumb/53683545.cms?imgsize=1834380&width=800&height=800'),
    new Recipe('Test name 2', 'This is the test description', 
    'https://static.toiimg.com/thumb/53683545.cms?imgsize=1834380&width=800&height=800')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  recipeRecived(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
    
  }

}
