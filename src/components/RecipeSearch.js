import React, { Component } from "react";
import axios from "axios";
import keys from "../config/keys";
import "./css/RecipeSearch.css";

//background image
import recipeImage from "./assets/RecipeImage.jpg";

//api calls
const apiKey = keys.recipeAPIkey;
const searchURL = "http://www.food2fork.com/api/search";
const corsURL = "https://cors-anywhere.herokuapp.com/";

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      recipes: []
    };
  }

  onSubmitSearch = () => {
    axios
      .get(`${corsURL}${searchURL}`, {
        params: {
          key: apiKey,
          q: this.state.query
        }
      })
      .then(res =>
        this.setState({
          recipes: res.data.recipes
        })
      )
      .catch(err => console.log(err));
  };

  onInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <div>
        <img src={recipeImage} className="filtered absolute" />
        <label htmlFor="recipe-box" className="label">
          Recipe Search:
        </label>
        <input
          type="text"
          name="recipe-box"
          className="text-input"
          onChange={this.onInputChange}
        />
        <input
          type="submit"
          className="primary"
          onClick={this.onSubmitSearch}
        />
        <br />
        {this.state.recipes.length > 0 ? (
          <ul>
            {this.state.recipes.map((items, index) => (
              <div>
                <li key={index + Math.random() * 65650}>
                  title: {items.title}
                </li>
                <li key={index + Math.random() * 65650}>
                  Popularity: {items.social_rank.toFixed(2)}
                </li>
                <li key={index + Math.random() * 65650}>
                  Publisher: {items.publisher}
                </li>
                <br />
                <li key={index + Math.random() * 65650}>
                  source url: <a href={items.source_url}>URL</a>
                </li>
              </div>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default RecipeSearch;
