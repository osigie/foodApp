import mealsDb from "../models/meals";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import meals from "../models/meals";

export const createMeals = async (req: Request, res: Response) => {
  try {
    const { name, description, amount, price, admin } = req.body;
    const mealsCreated = await meals.create({
      name,
      description,
      amount,
      price,
      admin,
    });
    mealsCreated
      ? res
          .status(StatusCodes.CREATED)
          .json({ message: "Meal successfully created" })
      : res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Please input all fields" });
  } catch (error) {
    console.log(error);
  }
};

export const getMeals = async (req: Request, res: Response) => {
  try {
    const meals = await mealsDb.find();
    res.status(200).json(meals);
  } catch (error) {
    console.log(error);
  }
};

export const getOneMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const meal = await mealsDb.findOne({ id });
    meal
      ? res.status(200).json(meal)
      : res.status(400).json({ message: "Meal not found" });
  } catch (error) {
    console.log(error);
  }
};

export const updateMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateBody = req.body;
    const update = await mealsDb.findOneAndUpdate(
      { id },
      { updateBody },
      { new: true }
    );
    update
      ? res.status(200).json(update)
      : res.status(400).json({ message: "Meal not found" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMeals = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await mealsDb.deleteOne({ id });
    deleted
      ? res.status(200).json({ message: "Meal deleted successfully" })
      : res.status(400).json({ message: "Meal not found" });
  } catch (error) {
    console.log(error);
  }
};
