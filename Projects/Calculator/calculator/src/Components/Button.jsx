import styles from "./Button.module.css";
const Button = ({buttons , handleOnClick }) => {
  return   buttons.map(button => <button className={`${styles.button}`}
  onClick={() => handleOnClick(button)}>{button}</button>)
  
};

export default Button;
