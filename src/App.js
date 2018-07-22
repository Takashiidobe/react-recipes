import React, { Component } from "react";
import "./App.css";
import * as routes from "./constants/routes";
import { BrowserRouter, Route } from "react-router-dom";
import RecipeSearch from "./components/RecipeSearch";
import IngredientRecipeSearch from "./components/IngredientRecipeSearch";

//suggest us a random recipe
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path={routes.ingredientSearch}
            component={() => <IngredientRecipeSearch />}
          />
          <Route
            exact
            path={routes.recipeSearch}
            component={() => <RecipeSearch />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
