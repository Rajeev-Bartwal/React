import Fooditems from "./Components/Fooditems";
import Error from "./Components/Error";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [fooditems, setFoodItems] = useState([]);
  let [textToShow, setTextState] = useState();

  const onKeyDown = (e) => {
    setTextState(e.target.value);
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      if (!fooditems.includes(newFoodItem)) {
        let newItems = [...fooditems, newFoodItem];
        setFoodItems(newItems);
        e.target.value = "";
      }
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <Error items={fooditems} />
        <Fooditems fooditems={fooditems} />
      </Container>
      {/* <Container>
        <p className="heading">Above List is The list of Healthy Foods that are good for your health and well being
          </p>
      </Container> */}
    </>
  );
}

export default App;
