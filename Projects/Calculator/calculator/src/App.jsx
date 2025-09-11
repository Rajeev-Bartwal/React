import Display from "./Components/input";
import Buttons from "./Components/ButtonContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [buttonValue, setButtonValue] = useState("");

  const handleOnClick = (value) => {
    let newkeyValue = value;

    let updateButonsValues = buttonValue + newkeyValue;
    if (newkeyValue === "C") {
      updateButonsValues = "";
      setButtonValue(updateButonsValues);
    } else if (newkeyValue === "=") {
      try {
        const result = eval(buttonValue);
        setButtonValue(result);
      } catch (error) {
        setButtonValue("Error");
      }
    } else setButtonValue(updateButonsValues);
  };

  return (
    <div className={`${styles.calculator}`}>
      <Display value={buttonValue} />
      <Buttons handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
