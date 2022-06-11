"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./database/connect"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
const start = async () => {
    try {
        await (0, connect_1.default)(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`⚡️server running on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
