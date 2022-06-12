import express from "express"

const router = express.Router()


router.route("/meals").post().get()
router.route("/admin/:id").get()