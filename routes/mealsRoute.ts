import express from "express";

const router = express.Router();
import {
  createMeals,
  deleteMeals,
  getMeals,
  getOneMeal,
  updateMeal,
} from "../controllers/mealsController";

router.route("/meals").post(createMeals).delete(deleteMeals).get(getMeals);
router.route("/admin/:id").get(getOneMeal).patch(updateMeal);


export default router