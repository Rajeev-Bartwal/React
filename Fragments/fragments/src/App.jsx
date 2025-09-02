import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let fooditems = [];
  // let fooditems = ["Daal", "Green vegetable", "Roti.", "Milk", "Salad", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      {fooditems.length === 0 ? <h1>I'm still hungry...</h1> : null}
      <ul className="list-group">
        {fooditems.map((item) => (
          <li key={item} className="list-group-item item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
