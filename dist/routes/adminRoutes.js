"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../validation");
const router = express_1.default.Router();
const adminController_1 = require("../controllers/adminController");
router.route("/admin/register").post((0, validation_1.validate)(validation_1.AdminSchema), adminController_1.register);
router.route("/admin/login").post(adminController_1.login);
exports.default = router;
