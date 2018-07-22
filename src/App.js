//imports
import React from "react";
import { Route } from "react-router-dom";

//css
import "./App.css";

//components
import RecipeSearch from "./components/RecipeSearch";
import IngredientRecipeSearch from "./components/IngredientRecipeSearch";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

//routes
import * as routes from "./constants/routes";

//suggest us a random recipe
const App = () => (
  <div>
    <Navbar />
    <Route exact path={routes.home} component={() => <Home />} />
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
);

export default App;
