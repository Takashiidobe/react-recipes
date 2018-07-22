import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import keys from "./config/keys";
import axios from "axios";

const apiKey = keys.recipeAPIkey;
const searchURL = "http://www.food2fork.com/api/search";
const corsURL = "https://cors-anywhere.herokuapp.com/";
const requestURL = "http://www.food2fork.com/api/get";
const recipePuppyURL = "http://www.recipepuppy.com/api/";

const styles = {
  listStyleType: "none",
  border: "1px solid black"
};

//suggest us a random recipe
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      recipes: [],
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      puppyQuery: "",
      puppyRecipes: []
    };
  }

  submitSearch = () => {
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

  submitIngredientSearch = () => {
    axios
      .get(`${corsURL}${recipePuppyURL}`, {
        params: {
          i: `${this.state.ingredient1}, ${this.state.ingredient2}, ${
            this.state.ingredient3
          }`,
          q: `${this.state.puppyQuery}`
        }
      })
      .then(res =>
        this.setState({
          puppyRecipes: res.data.results
        })
      )
      .catch(err => console.log(err));
  };

  onQueryChange = e => {
    this.setState({
      puppyQuery: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input type="text" onChange={this.onInputChange} />
          <input type="submit" onClick={this.submitSearch} />
          <br />
          <p>Search by ingredients!</p>
          <input type="text" onChange={this.onIngredientOneChange} />
          <br />
          <input type="text" onChange={this.onIngredientTwoChange} />
          <br />
          <input type="text" onChange={this.onIngredientThreeChange} />
          <br />
          <input type="submit" onClick={this.submitIngredientSearch} />
          <br />
          <p>Or if you want to just search by dish again!</p>
          <input type="text" onClick={this.onQueryChange} />
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
          <br />
          Puppy Recipes:
          {this.state.puppyRecipes.length > 0 ? (
            <ul>
              {this.state.puppyRecipes.map((items, index) => (
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
          <br />
          Powered by: Recipe Puppy API: http://www.recipepuppy.com/about/api/
        </p>
      </div>
    );
  }
}

export default App;
