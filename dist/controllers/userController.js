"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const users_1 = __importDefault(require("../models/users"));
const createUser = async (req, res) => {
    try {
        const { name, street, postal, city } = req.body;
        if (!name || !street || !postal || !city) {
            res.status(400).json({ message: "please input all fields" });
            return;
        }
        const user = await users_1.default.create({ name, street, city, postal });
        res.status(201).json({ message: "user created" });
    }
    catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
};
exports.createUser = createUser;
