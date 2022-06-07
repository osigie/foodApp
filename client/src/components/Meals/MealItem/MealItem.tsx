
import classes from "./MealItem.module.css"
import React from 'react'
import MealItemFrom from "./MealItemForm"

type Props = {
    name:string,
    description:string,
    price:number,
}

const MealItem = (props: Props) => {
const price = `$${props.price.toFixed(2)}`;
  return (
    <li className = {classes.meal}>
      <div>
          <h3> {props.name}</h3>
          <div className = {classes.description}>{props.description}</div>
          <div className = {classes.price}>{price}</div>
      </div>
      <div> 

          <MealItemFrom/>  
      </div>
    </li>
  );
}

export default MealItem