"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMealsbyAdmin = exports.getAllUserAndOrders = exports.createUser = void 0;
const users_1 = __importDefault(require("../models/users"));
const createUser = async (req, res) => {
    try {
        const { name, street, postal, city, orders } = req.body;
        if (!name || !street || !postal || !city || !orders) {
            res.status(400).json({ message: "please input all fields" });
            return;
        }
        const user = await users_1.default.create({ name, street, city, postal, orders });
        res.status(201).json({ message: "user created" });
    }
    catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
};
exports.createUser = createUser;
const getAllUserAndOrders = async (req, res) => {
    try {
        const orders = await users_1.default.find();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
};
exports.getAllUserAndOrders = getAllUserAndOrders;
const getMealsbyAdmin = async (req, res) => {
    try {
        const { id } = req.user;
        if (!id) {
            res.status(404).json({ message: "Not authorized" });
        }
        const user = await users_1.default.find({ admin: id });
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getMealsbyAdmin = getMealsbyAdmin;
