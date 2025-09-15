import { createContext } from "react";

export const TodoContext = createContext({
  todoItems: [],
  addItem : () => {},
  deleteItem :  () => {}
});
