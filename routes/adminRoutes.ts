
import express from "express"

const router = express.Router()
import {register,login} from "../controllers/adminController"

router.route("/admin/login").post(register)
router.route("/admin/register").post(login)

export default router