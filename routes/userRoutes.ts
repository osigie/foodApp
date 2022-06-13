import express from "express";

const router = express.Router();
import { createUser, getAllUserAndOrders } from "../controllers/userController";

router.route("/user").post(createUser).get(getAllUserAndOrders);

export default router;
