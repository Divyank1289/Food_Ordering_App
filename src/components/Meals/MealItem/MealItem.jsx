import {useContext} from "react";

import './MealItem.css'
import MealitemForm from "./MealitemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

    const price=`$${props.price.toFixed(2)}`;

    const addToCartHandler = amount =>{
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
        })
    };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealitemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
