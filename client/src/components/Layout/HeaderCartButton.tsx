import classes from "./HeaderCartButton.module.css";
import React from "react";
import CartIcon from "../Cart/CartIcon";

type Props = {
    onShow:()=>void
};

const HeaderCartButton = (props: Props) => {
  return (
    <button className={classes.button} onClick = {props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default HeaderCartButton;
