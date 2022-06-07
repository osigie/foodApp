import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
type Props = {};

const MealItemForm = (props: Props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button> + Add</button>
    </form>
  );
};

export default MealItemForm;
