import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

import "./css/Navbar.css";

const Navbar = () => (
  <ul className="navbar">
    <li className="nav-item">
      <Link to={routes.home}>Home</Link>
    </li>
    <li className="nav-item">
      <Link to={routes.ingredientSearch}>Search By Ingredients</Link>
    </li>
    <li className="nav-item">
      <Link to={routes.recipeSearch}>Search By Recipe</Link>
    </li>
  </ul>
);

export default Navbar;
