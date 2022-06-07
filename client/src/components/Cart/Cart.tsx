import classes from "./Cart.module.css";
import React from "react";
import Modal from "../UI/Modal";

type Props = {
  onClose: () => void;
};

const Cart = (props: Props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "Eba", amount: 5, price: 50 }].map((each, key) => {
        return <li key={key}> {each.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>78</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
