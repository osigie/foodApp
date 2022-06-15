import express from "express";
import { protectRoutes } from "../middlewares/authMiddleware";

const router = express.Router();
import {
  createMeals,
  deleteMeals,
  getMeals,
  getOneMeal,
  updateMeal,
} from "../controllers/mealsController";

router.route("/meals").post(protectRoutes, createMeals).get(getMeals);
router
  .route("/meals/:id")
  .get(getOneMeal)
  .patch(protectRoutes, updateMeal)
  .delete(protectRoutes, deleteMeals);

export default router;
