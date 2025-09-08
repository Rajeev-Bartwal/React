import Display from "./Components/input";
import Buttons from "./Components/ButtonContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={`${styles.calculator}`}>
      <Display/>
      <Buttons/>
    </div>
  );
}

export default App;
