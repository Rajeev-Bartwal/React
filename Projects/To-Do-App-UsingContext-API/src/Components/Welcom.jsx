import styles from "./AppName.module.css"
import { TodoContext } from "../Store/todo_items_store";
import { useContext } from "react";

function Welcome(){
  
  const todoItems = useContext(TodoContext)
  return (todoItems.length === 0 &&<h5 className={`${styles.heading1}`}>Welcome! Add your first task and start your productivity journey. ✨</h5>)
}

export default Welcome;