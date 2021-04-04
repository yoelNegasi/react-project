import "./App.css";
function Drinks(props) {
  return (
    <div className="container">
      <div className="id">
        <h1> Drink number :</h1>
        <h2> {props.idDrink}</h2>
      </div>
      <div className="category">
        <h1> Drink Category:</h1>
        <h2>{props.strCategory}</h2>
      </div>
      <div className="alcoholic">
        <h1>Alcohol: </h1>
        <h2>{props.strAlcoholic}</h2>
      </div>
      <div className="glass">
        <h1> Serving Glass:</h1>
        <h2> {props.strGlass}</h2>
      </div>
      <div className="ins">
        <h1> Instruction: </h1>
        <h2>{props.strInstructions}</h2>
      </div>
      <div className="ing">
        <h1>Ingredients</h1>
        <div>
          <h2>{props.strIngredient1}</h2>
        </div>
        <div>
          <h2>{props.strIngredient2}</h2>
        </div>
        <div>
          <h2>{props.strIngredient4}</h2>
        </div>
        <div>
          <h2>{props.strIngredient5}</h2>
        </div>
        <div>
          <h2>{props.strIngredient6}</h2>
        </div>
        <div>
          <h2>{props.strIngredient7}</h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Drinks;
