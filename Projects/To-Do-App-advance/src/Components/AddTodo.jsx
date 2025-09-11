import styles from "./AddTodo.module.css";
import { useState } from "react";
import { RiAddLargeLine } from "react-icons/ri";

function AddTodo({ handleOnClick }) {
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const handleOnNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleOnDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleOnAdd = () => {
    handleOnClick(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className={`${styles.container_text_center}`}>
      <div className="row">
        <div className="col-6">
       <textarea
  className={` ${styles.control} form-control`}
  rows="2"
  value={todoName}
  onChange={handleOnNameChange}
  placeholder="Enter your task..."
></textarea>

        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            value={todoDate}
            id=""
            onChange={handleOnDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success rb_button"
            onClick={handleOnAdd}
          >
            <RiAddLargeLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
