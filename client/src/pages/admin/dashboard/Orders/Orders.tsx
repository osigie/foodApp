import React, { useEffect } from "react";
import SingleOrders from "../../../../components/SingleOrders/SingleOrders";
import classes from "./Orders.module.css";
import { getUser } from "../../../../features/admin/admin";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
type Props = {};

const Orders = (props: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.admin);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={classes.mainContainer}>
      <h3>Custumer Details And Orders</h3>

      {user.map((each: any, key) => {
        return <div key={key} className = {classes.card}> {<SingleOrders {...each} />}</div>;
      })}
    </div>
  );
};

export default Orders;
