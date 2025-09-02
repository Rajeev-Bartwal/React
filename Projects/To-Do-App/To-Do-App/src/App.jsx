import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import { Todo1, Todo2 } from "./Components/ToDos";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Todo1 />
      <Todo2 />
    </center>
  );
}

export default App;
