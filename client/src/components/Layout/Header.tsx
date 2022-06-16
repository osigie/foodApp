import React from "react";
import image from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";
import {RiAdminLine} from "react-icons/ri"
import Logo from "../Logo"

type Props = {
  onShow: () => void;
};

const Header = (props: Props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FoodApp </h1>
        
      
        <div className= {classes.rightHeader}>
        <HeaderCartButton onShow={props.onShow} />
        <div className={classes.adminContainer}>
        <span className={classes.admin}>
          <Link to="/admin/register">Admin</Link>
        </span>
        <RiAdminLine />
        </div>
      
        </div>
       
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="A table full of yummy meals" />
      </div>
    </>
  );
};

export default Header;
