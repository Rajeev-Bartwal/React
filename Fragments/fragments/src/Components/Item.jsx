import styles from "./Item.module.css";

const Item = ({ fooditem, handleBuyButton, isBought}) => {
  return (
    <li className={isBought ? `${styles.item} list-group-item ${styles.bought}` : `${styles.item} list-group-item `}>
      <span className={styles["span"]}>{fooditem}</span>
      <button
        type="button"
        className={` ${styles.button} btn btn-success`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
