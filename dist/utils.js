"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashing = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.JWT_SECRET;
//generate token
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, secret, { expiresIn: "30d" });
};
exports.generateToken = generateToken;
//Hash Password
const hashing = async (password) => {
    const salt = await bcryptjs_1.default.genSalt(10);
    const hashedPassword = await bcryptjs_1.default.hash(password, salt);
    return hashedPassword;
};
exports.hashing = hashing;
//compare password
const comparePassword = async (currentPassword, oldPassword) => {
    const compare = await bcryptjs_1.default.compare(currentPassword, oldPassword);
    return compare;
};
exports.comparePassword = comparePassword;
