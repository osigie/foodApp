"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const mealsController_1 = require("../controllers/mealsController");
router.route("/meals").post(mealsController_1.createMeals).delete(mealsController_1.deleteMeals).get(mealsController_1.getMeals);
router.route("/admin/:id").get(mealsController_1.getOneMeal).patch(mealsController_1.updateMeal);
exports.default = router;
