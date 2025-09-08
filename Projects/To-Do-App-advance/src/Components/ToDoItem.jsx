import styles from "./AddTodo.module.css"

function TodoItem(props) {
  let { todoName, todoDate } = props;

  return (
    <div className={` ${styles.container_text_center}`}>
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger rb_button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
