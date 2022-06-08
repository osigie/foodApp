import classes from "./Cart.module.css";
import React from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { useAppSelector } from "../../app/hooks";
import { mealObj } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/cart/cartSlice";
type Props = {
  onClose: () => void;
};

const Cart = (props: Props) => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useAppSelector((store) => store.cart);
  const total = totalAmount.toFixed(2);

  const handleAdd = (item: mealObj) => {
    const data = {
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    };
    dispatch(addItemToCart(data));
  };

  const handleRemove = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {items.map((each, key) => {
        // return <li key={key}> {each.name}</li>;
        return (
          <CartItem
            key={key}
            price={each.price}
            name={each.name}
            amount={each.amount}
            onRemove={() => handleRemove(each.id)}
            onAdd={() => handleAdd(each)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${total}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
