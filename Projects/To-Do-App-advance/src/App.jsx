import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Go to school",
      date: "2/06/2025",
    },
    {
      name: "Learn React",
      date: "2/06/2025",
    },
    {
      name: "Do DSA",
      date: "5/06/2025",
    },
    {
      name: "Clear JS Concept",
      date: "2/06/2025",
    },
    {
      name: "Watch Movie",
      date: "2/06/2025",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={todoItems} />
    </center>
  );
}

export default App;
