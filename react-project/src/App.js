import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Drinks from "./Drinks";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: [],
    };
    // this.getinfo = this.getinfo.(this);
  }

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        this.setState({ drinks: response.data.drinks });
        console.log(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  render() {
    console.log("STATE: ", this.state.drinks);
    let finalDrinks = this.state.drinks;
    console.log("FINAL DRINKS: ", finalDrinks);
    // let element = [];
    let element = finalDrinks.map((el) => {
      return (
        <Drinks
          idDrink={el.idDrink}
          strCategory={el.strCategory}
          strAlcoholic={el.strAlcoholic}
          strGlass={el.strGlass}
          strInstructions={el.strInstructions}
          strIngredient1={el.strIngredient1}
          strIngredient2={el.strIngredient2}
          strIngredient3={el.strIngredient3}
          strIngredient4={el.strIngredient4}
          strIngredient5={el.strIngredient5}
          strIngredient6={el.strIngredient6}
          strIngredient7={el.strIngredient7}
        />
      );
    });

    return (
      <div>
        <h1 className="title">DRINK MENU</h1>
        <ul>{element}</ul>
      </div>
    );
  }
}

export default App;

{
  /* <div>
          <li> {el.idDrink} </li>
          <li> {el.strCategory} </li>
          <li> {el.strAlcoholic} </li>
          <li> {el.strGlass} </li>
          <li>{el.strInstructions}</li>
          <li>{el.strDrinkThumb}</li>
          <li>{el.strIngredient1}</li>
          <li>{el.strIngredient2}</li>
          <li>{el.strIngredient3}</li>
        </div> */
}
