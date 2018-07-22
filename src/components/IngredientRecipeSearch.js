import React, { Component } from "react";
import axios from "axios";

const recipeURL = "http://www.recipepuppy.com/api/";

const corsURL = "https://cors-anywhere.herokuapp.com/";

const styles = {
  listStyleType: "none",
  border: "1px solid black"
};
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
      <div>
        <input type="text" onChange={this.onIngredientOneChange} />
        <br />
        <input type="text" onChange={this.onIngredientTwoChange} />
        <br />
        <input type="text" onChange={this.onIngredientThreeChange} />
        <br />
        <input type="text" onChange={this.onQueryChange} />
        <br />
        <input type="submit" onClick={this.submitIngredientSearch} />
        <br />
        <p>Or if you want to just search by dish again!</p>
        {this.state.recipes.length > 0 ? (
          <ul>
            {this.state.recipes.map((items, index) => (
              <p style={styles}>
                <li key={index + Math.random() * 65650}>
                  title: {items.title}
                </li>
                <li key={index + Math.random() * 65650}>
                  URL: <a href={items.href}>URL</a>
                </li>
                <li key={index + Math.random() * 65650}>
                  Ingredients: {items.ingredients}
                </li>
                <br />
                <li key={index + Math.random() * 65650}>
                  <img src={items.thumbnail} alt="thumbnail" />
                </li>
              </p>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default IngredientRecipeSearch;
