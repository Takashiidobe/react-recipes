import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

import "./css/Navbar.css";

const Navbar = () => (
  <ul>
    <li>
      <Link to={routes.home}>Home</Link>
    </li>
    <li>
      <Link to={routes.ingredientSearch}>Search using Ingredients</Link>
    </li>
    <li>
      <Link to={routes.recipeSearch}>Search By Recipe</Link>
    </li>
  </ul>
);

export default Navbar;
