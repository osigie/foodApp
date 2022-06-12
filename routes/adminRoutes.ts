
import express from "express"

const router = express.Router()
import {register,login} from "../controllers/adminController"

router.route("/admin/register").post(register)
router.route("/admin/login").post(login)

export default router