import React from "react";
import classes from "./CheckOut.module.css";

type Props = {
  onClick: () => void;
};

const CheckOut = (props: Props) => {
    const confirmHandler = ()=>{
        
    }
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">name </label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">street </label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">postal </label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">city </label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onClick}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default CheckOut;
