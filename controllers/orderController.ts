import orderDb from "../models/orders";
import { NextFunction, Request, Response } from "express";

export const createOrders = async (req: Request, res: Response) => {
  try {
    const { name, description, price, amount, user } = req.body;
    const createdOrders = await orderDb.create({
      name,
      description,
      price,
      amount,
      user,
    });
    res.status(201).json(createdOrders);
  } catch (error) {
    res.status(400).json({ message: "Please input all fields" });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderDb.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
