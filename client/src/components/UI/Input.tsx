import classes from "./Input.module.css";
import React, { InputHTMLAttributes } from "react";

type Props = {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
};

const Input = (props: Props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
