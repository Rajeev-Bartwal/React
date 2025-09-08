import styles from "./Button.module.css";
const Button = ({buttons}) => {
  return   buttons.map(button => <button className={`${styles.button}`}>{button}</button>)
  
};

export default Button;
