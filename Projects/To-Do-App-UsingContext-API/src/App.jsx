import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Welcome from "./Components/Welcom";
import TodoItemsConextProvider from "./Store/todo_items_store";

function App() {
  return (
    <TodoItemsConextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome />
        <TodoItems />
      </center>
    </TodoItemsConextProvider>
  );
}

export default App;
