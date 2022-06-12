"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const admin_1 = __importDefault(require("../models/admin"));
const utils_1 = require("../utils");
const http_status_codes_1 = require("http-status-codes");
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ message: "Please add all fields" });
        }
        //check if Admin exist
        const isExist = await admin_1.default.findOne({ email });
        if (isExist) {
            res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ message: "Admin already exists" });
            return;
        }
        const hashedPassword = await (0, utils_1.hashing)(password);
        //Create Admin
        await admin_1.default.create({
            name,
            email,
            password: hashedPassword,
        });
        const admin = await admin_1.default.findOne({ email });
        const token = (0, utils_1.generateToken)(admin._id);
        admin
            ? res.status(201).json({ admin: { _id: admin.id, name, email }, token })
            : res.status(400).json({ message: "Invalid admin data" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //check for admin in db
        const admin = await admin_1.default.findOne({ email });
        //compare the password if they match
        const matchPassword = await (0, utils_1.comparePassword)(password, admin.password);
        const token = (0, utils_1.generateToken)(admin._id);
        if (admin && matchPassword) {
            res
                .status(200)
                .json({ admin: { _id: admin.id, name: admin.name, email }, token });
            return;
        }
        else {
            res;
            res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ message: "Invalid Credentails" });
            return;
        }
    }
    catch (error) {
        res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .json({ message: "Invalid Credentails" });
    }
};
exports.login = login;
