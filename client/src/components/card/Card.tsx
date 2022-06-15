import { ReactNode } from "react";
import classes from "./Card.module.css";

type CardProps = {
  children: ReactNode;
};

const Card = (props: CardProps) => {
  return <div className={`${classes.card}`}>{props.children}</div>;
};

export default Card;
