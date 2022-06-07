import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealsSummary";

type Props = {};

const Meals = (props: Props) => {
  return (
    <>
      <MealSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
