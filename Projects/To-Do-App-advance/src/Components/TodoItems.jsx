import TodoItem from "./ToDoItem";

function TodoItems({ TodoItems , handleOnClick}) {
  return (
    <>
     { TodoItems.map((item) => (
      <TodoItem todoName={item.name} todoDate={item.date} handleOnClick = {handleOnClick}/>
      ))}
    </>
  );
}

export default TodoItems;
