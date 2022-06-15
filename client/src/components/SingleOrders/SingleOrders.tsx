import React, { ReactNode } from "react";
import Order from "../Order/Order";
import classes from "./SingleOrders.module.css";

type Props = {
  name: string;
  street: string;
  postal: string;
  city: string;
  time: string;
  orders: Array<any>;
};

const SingleOrders = (props: Props) => {
  return (



    <div className={classes.singleOrdersContainer}>
      <header className={classes.headers}>
        <div className={classes.userInfo}>
          <p>{props.name}</p>
          <p>{props.street}</p>
          <p>{props.postal}</p>
          <p>{props.city}</p>
          <p>{props.time}</p>
        </div>
      </header>
      <div className={classes.orders}>
        {props.orders.map((order, index) => {
          return (
            <Order
              key={index}
              name={order.name}
              price={order.price}
              amount={order.amount}
            />
          );
        })}
      </div>
    </div>

  );
};

export default SingleOrders;
