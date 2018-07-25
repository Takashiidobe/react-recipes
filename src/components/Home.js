import React from "react";
import home from "./assets/home.jpg";
import "./css/Home.css";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

const Home = () => {
  return (
    <div className="homepage">
      <img src={home} alt="" className="filtered absolute" />
      <div className="centered absolute">
        <h3>Lets make some recipes together!</h3>
        <Link to={routes.recipeSearch}>
          <button className="primary">Search by Recipe</button>
        </Link>
        <Link to={routes.ingredientSearch}>
          <button className="primary">Search by Ingredients</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
