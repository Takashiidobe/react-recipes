import React, { Component } from "react";
import axios from "axios";
import "./css/IngredientRecipeSearch.css";
import ingredients from "./assets/ingredients.jpg";

const recipeURL = "http://www.recipepuppy.com/api/";

const corsURL = "https://cors-anywhere.herokuapp.com/";

class IngredientRecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      query: "",
      recipes: []
    };
  }

  onIngredientOneChange = e => {
    this.setState({
      ingredient1: e.target.value
    });
  };

  onIngredientTwoChange = e => {
    this.setState({
      ingredient2: e.target.value
    });
  };

  onIngredientThreeChange = e => {
    this.setState({
      ingredient3: e.target.value
    });
  };

  onQueryChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  submitIngredientSearch = () => {
    axios
      .get(`${corsURL}${recipeURL}`, {
        params: {
          i: `${this.state.ingredient1}, ${this.state.ingredient2}, ${
            this.state.ingredient3
          }`,
          q: `${this.state.query}`
        }
      })
      .then(res =>
        this.setState({
          recipes: res.data.results
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="ingredient-search">
        <img src={ingredients} className="filtered absolute" />
        <div className="food-form">
          <label htmlFor="ing1" className="label">
            Ingredient 1:{" "}
          </label>
          <input
            type="text"
            name="ing1"
            className="text-input"
            onChange={this.onIngredientOneChange}
          />
          <br />
          <label htmlFor="ing2" className="label">
            Ingredient 2:{" "}
          </label>
          <input
            type="text"
            name="ing2"
            className="text-input"
            onChange={this.onIngredientTwoChange}
          />
          <br />
          <label htmlFor="ing3" className="label">
            Ingredient 3:{" "}
          </label>
          <input
            type="text"
            name="ing3"
            className="text-input"
            onChange={this.onIngredientThreeChange}
          />
          <br />
          <label htmlFor="dish-name" className="label">
            Dish Name:{" "}
          </label>
          <input
            type="text"
            name="dish-name"
            className="text-input"
            onChange={this.onQueryChange}
          />
          <br />
          <input
            type="submit"
            className="primary"
            onClick={this.submitIngredientSearch}
          />
        </div>
        {this.state.recipes.length > 0 ? (
          <ul>
            {this.state.recipes.map((items, index) => (
              <div className="mapped-items">
                <li key={index + Math.random() * 65650}>
                  <img src={items.thumbnail} alt="" />
                </li>
                <li key={index + Math.random() * 65650}>
                  title: {items.title}
                </li>
                <li key={index + Math.random() * 65650}>
                  Link to Recipe: <a href={items.href}>Recipe</a>
                </li>
                <li key={index + Math.random() * 65650}>
                  Ingredients: {items.ingredients}
                </li>
                <br />
              </div>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default IngredientRecipeSearch;
