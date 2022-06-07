import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import React from "react";
import MealItem from "./MealItem/MealItem";
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
      <Card>
        <ul>
          {DUMMY_MEALS.map((each, index) => {
            return (
              <MealItem
                key={index}
                name={each.name}
                description={each.description}
                price={each.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
