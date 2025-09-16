import { createContext , useReducer } from "react";

export const TodoContext = createContext({
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
});

const todoReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    const todoName = action.payload.todoName;
    const todoDate = action.payload.todoDate;

    if (todoName && todoDate) {
      const isDuplicate = currTodoItems.some(
        (item) => item.name === todoName && item.date === todoDate
      );
      if (isDuplicate) {
        alert("This todo already exists!");
      } else {
        newTodoItems = [...currTodoItems, { name: todoName, date: todoDate }];
      }
    } else {
      alert("Please enter both name and date");
    }
  } else if (action.type === "DELETE_ITEM") {
    const todoName = action.payload.todo;
    newTodoItems = currTodoItems.filter((item) => item.name != todoName);
  }
  return newTodoItems;
};

const TodoItemsConextProvider = ({children}) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoReducer, []);

  const addItem = (todoName, todoDate) => {
    const addAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(addAction);
  };

  const deleteItem = (todo) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        todo,
      },
    };
    dispatchTodoItems(deleteAction);
  };

  return <TodoContext.Provider value={{ todoItems, addItem, deleteItem }}>{children}</TodoContext.Provider>
};

export default TodoItemsConextProvider;
