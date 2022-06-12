import express from "express"
import {createOrders,getOrders} from "../controllers/orderController"
const router = express.Router()


router.route("/order").post(createOrders).get(getOrders)


export default router