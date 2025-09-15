import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Welcome from "./Components/Welcom";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const handleOnClick = (todoName, todoDate) => {
    
    if (todoName && todoDate) {

    const isDuplicate = todoItems.some(
      (item) => item.name === todoName && item.date === todoDate
    );
     if (isDuplicate) {
      alert("This todo already exists!");
    } else {
      setTodoItems((currValue) => [...currValue , {name : todoName , date : todoDate} ]);
    }
    } else {
      alert("Please enter both name and date");
    }
  };

  const handleDeleteClick = (todo) => {
    let newTodos = todoItems.filter((item) => item.name != todo);
    setTodoItems(newTodos);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleOnClick={handleOnClick} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems TodoItems={todoItems} handleOnClick={handleDeleteClick}/>
    </center>
  );
}

export default App;
