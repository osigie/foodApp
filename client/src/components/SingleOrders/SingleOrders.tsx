import React, { ReactNode, useState } from "react";
import Order from "../Order/Order";
import classes from "./SingleOrders.module.css";
import Wrapper from "../../assets/wrappers/tableWrapper";
import moment from "moment";
import Modal from "../UI/Modal";
import Table from "../table/table";

type Props = {
  name: string;
  street: string;
  postal: string;
  city: string;
  createdAt: string;
  orders: Array<any>;
};

const SingleOrders = (props: Props) => {
  let date = moment(props.createdAt).format("MMM Do YYYY");
  const [state, setState] = useState(false);

  const openModal = () => {
    setState(true);
  };
  const closeModal = () => {
    setState(false);
  };

  return (
    <div className={classes.singleOrdersContainer}>
      <header className={classes.headers}>
        <Wrapper>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-4">Name</div>
              <div className="col col-4">Street</div>
              <div className="col col-4">Postal</div>
              <div className="col col-4">City</div>
              <div className="col col-4">Time</div>
            </li>
            <li className="table-row">
              <div className="col col-4" data-label="Job Id">
                {props.name}
              </div>
              <div className="col col-4" data-label="Customer Name">
                {props.street}
              </div>
              <div className="col col-4" data-label="Amount">
                {props.postal}
              </div>
              <div className="col col-4" data-label="Amount">
                {props.city}
              </div>

              <div className="col col-4" data-label="Payment Status">
                {date}
              </div>
            </li>
          </ul>
        </Wrapper>
      </header>

      {state && (
        <Modal onClose={closeModal}>
          <Wrapper>
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-4">Name</div>
                <div className="col col-4">Price</div>
                <div className="col col-4">Amount</div>
              </li>

              {props.orders.map((order) => {
                return (
                  <li className="table-row">
                    <div className="col col-4" data-label="Job Id">
                      {order.name}
                    </div>
                    <div className="col col-4" data-label="Customer Name">
                      {order.price}
                    </div>
                    <div className="col col-4" data-label="Amount">
                      {order.amount}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Wrapper>
        </Modal>
      )}

      <button onClick={openModal}>View Orders</button>
    </div>
  );
};

export default SingleOrders;
