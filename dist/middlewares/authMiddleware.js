"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectRoutes = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const admin_1 = __importDefault(require("../models/admin"));
const dotenv = require('dotenv').config();
const secret = process.env.JWT_SECRET;
const protectRoutes = async (req, res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get token from headers
            token = req.headers.authorization.split(' ')[1];
            //Verify token
            const decoded = jsonwebtoken_1.default.verify(token, secret);
            //Get user from the token
            req.user = await admin_1.default.findById(decoded.id).select('-password');
            next();
        }
        catch (error) {
            console.log(error);
            return res.status(401).json('Not authorized');
        }
    }
    if (!token) {
        return res.status(401).json('Not authorized no token');
    }
};
exports.protectRoutes = protectRoutes;
// ///Generate JWT token
