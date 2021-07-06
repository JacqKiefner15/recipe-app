import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path:'', component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent},
     {path:':id', component: RecipeDetailComponent },
    {path: ':id/edit', component: RecipeEditComponent}

  ]},
  { path: 'shopping-list', component:ShoppingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
