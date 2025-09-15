import styles from "./AddTodo.module.css"
import { RiDeleteBinLine } from "react-icons/ri";
import { useContext } from "react";
import { TodoContext } from "../Store/todo_items_store";

function TodoItem(props) {
  let { todoName, todoDate} = props;
  const {deleteItem} = useContext(TodoContext)

  return (
    <div className={` ${styles.container_text_center}`} key={todoName}>
      <div className="row">
        <div className="col-6" >{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger rb_button" onClick={() => deleteItem(todoName)}>
           <RiDeleteBinLine/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
