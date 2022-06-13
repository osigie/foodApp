import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import React, { useEffect } from "react";
import MealItem from "./MealItem/MealItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchData } from "../../features/meals/meals";

type MealType = {
  admin: string;
  amount: number;
  createdAt: string;
  description: string;
  name: string;
  price: number;
  updatedAt: string;
  __v: number;
  _id: string;
};

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

type Props = {};

const AvailableMeals = (props: Props) => {
  const dispatch = useAppDispatch();
  const { meal } = useAppSelector((store) => store.meals);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meal.map((each: MealType, index) => {
            return (
              <MealItem
                key={index}
                id={each._id}
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
