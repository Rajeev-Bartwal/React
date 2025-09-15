import { useContext } from "react";
import TodoItem from "./ToDoItem";
import { TodoContext } from "../Store/todo_items_store";

function TodoItems() {
  const {todoItems} = useContext(TodoContext)
  return (
    <>
     { todoItems.map((item) => (
      <TodoItem todoName={item.name} todoDate={item.date}/>
      ))}
    </>
  );
}

export default TodoItems;
