import express from "express"

const router = express.Router()
import {createUser} from "../controllers/userController"

router.route("/user").post(createUser)


export default router