import TodoItem from "./ToDoItem";

function TodoItems({ TodoItems }) {
  return (
    <>
     { TodoItems.map((item) => (
      <TodoItem todoName={item.name} todoDate={item.date} />
      ))}
    </>
  );
}

export default TodoItems;
