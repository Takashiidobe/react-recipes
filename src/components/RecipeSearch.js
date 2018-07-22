import React, { Component } from "react";
import axios from "axios";
import keys from "../config/keys";

//api calls
const apiKey = keys.recipeAPIkey;
const searchURL = "http://www.food2fork.com/api/search";
const corsURL = "https://cors-anywhere.herokuapp.com/";

const styles = {
  listStyleType: "none",
  border: "1px solid black"
};

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
        <input type="text" onChange={this.onInputChange} />
        <input type="submit" onClick={this.onSubmitSearch} />
        <br />
        {this.state.recipes.length > 0 ? (
          <ul>
            {this.state.recipes.map((items, index) => (
              <p style={styles}>
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
              </p>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default RecipeSearch;
