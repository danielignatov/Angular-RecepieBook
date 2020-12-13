import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'This is test recipe', 'http://danielignatov.tk/img/recipebook/pizza.jpg'),
    new Recipe('Cake', 'This is test recipe', 'http://danielignatov.tk/img/recipebook/cake.jpg'),
    new Recipe('Pancakes', 'This is test recipe', 'http://danielignatov.tk/img/recipebook/pancakes.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){

  }
}
