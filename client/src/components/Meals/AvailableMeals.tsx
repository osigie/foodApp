import classes from "./AvailableMeals.module.css";

import React from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

type Props = {};

const AvailableMeals = (props: Props) => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((each, index) => {
          return <li key={index}> {each.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
