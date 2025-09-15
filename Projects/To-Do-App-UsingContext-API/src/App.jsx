import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Welcome from "./Components/Welcom";
import { useState } from "react";
import { TodoContext } from "./Store/todo_items_store";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const addItem = (todoName, todoDate) => {
    if (todoName && todoDate) {
      const isDuplicate = todoItems.some(
        (item) => item.name === todoName && item.date === todoDate
      );
      if (isDuplicate) {
        alert("This todo already exists!");
      } else {
        setTodoItems((currValue) => [
          ...currValue,
          { name: todoName, date: todoDate },
        ]);
      }
    } else {
      alert("Please enter both name and date");
    }
  };

  const deleteItem = (todo) => {
    let newTodos = todoItems.filter((item) => item.name != todo);
    setTodoItems(newTodos);
  };

  return (
    <TodoContext.Provider value = {{todoItems,addItem,deleteItem}}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome />
        <TodoItems/>
      </center>
    </TodoContext.Provider>
  );
}

export default App;
