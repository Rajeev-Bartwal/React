import Item from "./Item";

const Fooditems = (props) => {
  return (
    <ul className="list-group">
      {props.Fooditems.map((item) => (
         <Item key = {item} fooditem = {item}></Item>
      ))}
    </ul>
  );
};

export default Fooditems;
