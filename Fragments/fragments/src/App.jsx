import Fooditems from "./Components/Fooditems";
import Error from "./Components/Error";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";

function App() {
  let fooditems = [
    "Daal",
    "Green vegetable",
    "Roti.",
    "Milk",
    "Salad",
    "Ghee",
    "Apple",
  ];

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <Error items={fooditems} />
        <Fooditems Fooditems={fooditems} />
      </Container>
      {/* <Container>
        <p className="heading">Above List is The list of Healthy Foods that are good for your health and well being
          </p>
      </Container> */}
    </>
  );
}

export default App;
