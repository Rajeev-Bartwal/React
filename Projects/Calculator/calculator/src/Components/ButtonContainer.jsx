import styles from "./Buttons.module.css"
import Button from "./Button";

const Buttons = ({handleOnClick}) => {

  const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
  "C" 
];

  return (
    <div className={`${styles.buttonContainer}`}>
       <Button buttons = {buttons} handleOnClick = {handleOnClick}/>
    </div>
  );
};

export default Buttons;
