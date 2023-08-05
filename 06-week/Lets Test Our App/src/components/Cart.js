import FoodItem from "./FoodItem.js";
import store from "../utils/store.js";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";
import { useContext } from "react";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  // console.log(useContext(Carts));
  return (
    <div>
      <h1>Cart Items</h1>
      <button
        onClick={() => handleClear()}
        className="bg-green-200 m-2 p-2 rounded-md"
      >
        Clear Cart
      </button>
      <div className="p-4 container mx-auto border h-screen flex  justify-between flex-wrap">
        {items.map((item, index) => {
          return <FoodItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
