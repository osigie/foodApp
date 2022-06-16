import express from "express";
import { protectRoutes } from "../middlewares/authMiddleware";
import { validate,mealsSchema} from "../validation";
const router = express.Router();
import {
  createMeals,
  deleteMeals,
  getMeals,
  getOneMeal,
  updateMeal,
} from "../controllers/mealsController";

router.route("/meals").post(validate(mealsSchema), protectRoutes, createMeals).get(getMeals);
router
  .route("/meals/:id")
  .get(getOneMeal)
  .patch(protectRoutes, updateMeal)
  .delete(protectRoutes, deleteMeals);

export default router;
