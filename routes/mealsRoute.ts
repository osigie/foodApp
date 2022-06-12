import express from "express";

const router = express.Router();
import {
  createMeals,
  deleteMeals,
  getMeals,
  getOneMeal,
  updateMeal,
} from "../controllers/mealsController";

router.route("/meals").post(createMeals).get(getMeals);
router
  .route("/meals/:id")
  .get(getOneMeal)
  .patch(updateMeal)
  .delete(deleteMeals);

export default router;
