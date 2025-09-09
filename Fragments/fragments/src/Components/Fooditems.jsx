import { useState } from "react";
import Item from "./Item";

const Fooditems = ({ fooditems }) => {
  const [boughtItems, setBoughtItems] = useState(new Set());

  const handleBuyButton = (item) => {
    let upadatedBoughtItems = new Set(boughtItems);
    
    if (upadatedBoughtItems.has(item)) {
      upadatedBoughtItems.delete(item);
    } else {
      upadatedBoughtItems.add(item);
    }
    setBoughtItems(upadatedBoughtItems);
    console.log(upadatedBoughtItems);
  };

  return (
    <ul className="list-group">
      {fooditems.map((item) => (
        <Item
          key={item}
          fooditem={item}
          isBought={boughtItems.has(item)}
          handleBuyButton={() => handleBuyButton(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default Fooditems;
