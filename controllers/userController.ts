import userDb from "../models/users";
import { NextFunction, Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, street, postal, city, orders } = req.body;
    if (!name || !street || !postal || !city || !orders) {
      res.status(400).json({ message: "please input all fields" });
      return;
    }
    const user = await userDb.create({ name, street, city, postal, orders });
    res.status(201).json({ message: "user created" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const getAllUserAndOrders = async (req: Request, res: Response) => {
  try {
    const orders = await userDb.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
