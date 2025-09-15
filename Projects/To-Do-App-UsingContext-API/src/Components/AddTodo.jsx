import styles from "./AddTodo.module.css";
import { useContext } from "react";
import { useRef } from "react";
import { RiAddLargeLine } from "react-icons/ri";
import { TodoContext } from "../Store/todo_items_store";

function AddTodo() {
  const {addItem} = useContext(TodoContext)
  const todoNameElement = useRef();
  const todoDateElement  = useRef();

  const handleOnAdd = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value
    todoNameElement.current.value = ''
    const todoDate = todoDateElement.current.value
    todoDateElement.current.value = ''
    addItem(todoName , todoDate);
  };

  return (
    <div className={`${styles.container_text_center}`}>
      <form className="row" onSubmit={(e) => handleOnAdd(e)}>
        <div className="col-6">
          <textarea
            className={` ${styles.control} form-control`}
            rows="2"
            ref={todoNameElement}

            placeholder="Enter your task..."
          ></textarea>
        </div>
        <div className="col-4">
          <input type="date" name="" ref={todoDateElement}/>
        </div>
        <div className="col-2">
          <button className="btn btn-success rb_button">
            <RiAddLargeLine />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
