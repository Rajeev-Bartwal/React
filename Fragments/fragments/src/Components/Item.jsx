import styles from "./Item.module.css";

const Item = ({ fooditem }) => {
  const handleByeButton = () => {
    console.log(`${fooditem} is being bought`);
  };

  return (
    <li className={`${styles.item} list-group-item`}>
      <span className={styles["span"]}>{fooditem}</span>
      <button
        type="button"
        className={` ${styles.button} btn btn-success`}
        onClick={() => {
          console.log(` ${fooditem} is being bought`);
        }}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
