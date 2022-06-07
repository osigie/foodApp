import classes from "./HeaderCartButton.module.css";
import React from "react";
import CartIcon from "../Cart/CartIcon";
import { useAppSelector } from "../../app/hooks";

type Props = {
  onShow: () => void;
};

const HeaderCartButton = (props: Props) => {
  const cartItems = useAppSelector((store) => store.cart.items);
  const numOfCartItems = cartItems.reduce((acc, curr, index) => {
    return acc + curr.price;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
