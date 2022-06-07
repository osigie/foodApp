import classes from "./Cart.module.css";
import React from "react";

type Props = {};

const Cart = (props: Props) => {
  const cartItem = (
    <ul className={classes["cart-item"]}>
      {[{ id: "1", name: "Eba", amount: 5, price: 50 }].map((each, key) => {
        return <li key={key}> {each.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>78</span>
      </div>
      <div className={classes.actions}>
        <button className = {classes["button--alt"]}>Close</button>
        <button className = {classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
