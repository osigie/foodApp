"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMeals = exports.updateMeal = exports.getOneMeal = exports.getMeals = exports.createMeals = void 0;
const meals_1 = __importDefault(require("../models/meals"));
const http_status_codes_1 = require("http-status-codes");
const meals_2 = __importDefault(require("../models/meals"));
const createMeals = async (req, res) => {
    try {
        const { name, description, amount, price, admin } = req.body;
        const mealsCreated = await meals_2.default.create({
            name,
            description,
            amount,
            price,
            admin,
        });
        mealsCreated
            ? res
                .status(http_status_codes_1.StatusCodes.CREATED)
                .json({ message: "Meal successfully created" })
            : res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ message: "Please input all fields" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createMeals = createMeals;
const getMeals = async (req, res) => {
    try {
        const meals = await meals_1.default.find();
        res.status(200).json(meals);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getMeals = getMeals;
const getOneMeal = async (req, res) => {
    try {
        const { id } = req.params;
        const meal = await meals_1.default.findOne({ id });
        meal
            ? res.status(200).json(meal)
            : res.status(400).json({ message: "Meal not found" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getOneMeal = getOneMeal;
const updateMeal = async (req, res) => {
    try {
        const { id } = req.params;
        const updateBody = req.body;
        const update = await meals_1.default.findOneAndUpdate({ id }, { updateBody }, { new: true });
        update
            ? res.status(200).json(update)
            : res.status(400).json({ message: "Meal not found" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateMeal = updateMeal;
const deleteMeals = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await meals_1.default.deleteOne({ id });
        deleted
            ? res.status(200).json({ message: "Meal deleted successfully" })
            : res.status(400).json({ message: "Meal not found" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteMeals = deleteMeals;
