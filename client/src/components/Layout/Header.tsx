import React from "react";
import image from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

type Props = {
  onShow: () => void;
};

const Header = (props: Props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food App </h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="A table full of yummy meals" />
      </div>
    </>
  );
};

export default Header;
