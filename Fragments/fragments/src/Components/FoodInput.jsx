import styles from "./FoodInput.module.css";

function FoodInput({ handleKeyDown }) {
  return (
    <div className="mb-3">
      <label htmlFor="Input" className="form-label heading">
        Food Item
      </label>
      <div className={`${styles.input_container}`}>
        <input
          type="text"
          className={`${styles.foodInput} form-control`}
          id="Input"
          placeholder="Enter Food Item"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default FoodInput;
