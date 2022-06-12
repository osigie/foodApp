"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.createOrders = void 0;
const orders_1 = __importDefault(require("../models/orders"));
const createOrders = async (req, res) => {
    try {
        const { name, description, price, amount, user } = req.body;
        const createdOrders = await orders_1.default.create({
            name,
            description,
            price,
            amount,
            user,
        });
        res.status(201).json(createdOrders);
    }
    catch (error) {
        res.status(400).json({ message: "Please input all fields" });
    }
};
exports.createOrders = createOrders;
const getOrders = async (req, res) => {
    try {
        const orders = await orders_1.default.find();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getOrders = getOrders;
