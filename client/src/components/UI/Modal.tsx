import classes from "./Modal.module.css";
import React, { ReactNode } from "react";
import ReactDom from "react-dom";

type childProps = {
  children: ReactNode;
};

const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverLays = (props: childProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portElement = document.getElementById("overlays");

const Modal = (props: childProps) => {
  return (
    <>
      {ReactDom.createPortal(<BackDrop />, portElement as Element)}
      {ReactDom.createPortal(
        <ModalOverLays> {props.children} </ModalOverLays>,
        portElement as Element
      )}
    </>
  );
};

export default Modal;
