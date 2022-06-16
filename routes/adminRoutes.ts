
import express from "express"
import {validate,AdminSchema} from "../validation"

const router = express.Router()
import {register,login} from "../controllers/adminController"

router.route("/admin/register").post(validate(AdminSchema),register)
router.route("/admin/login").post(login)

export default router