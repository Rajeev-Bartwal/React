import styles from "./AddTodo.module.css"

function AddTodo() {

  return (
    <div className= {`${styles.container_text_center}`} >
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success rb_button">
            Add 
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
