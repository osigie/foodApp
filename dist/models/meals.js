"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const MealsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please provide name of meals"],
        maxlength: 100,
    },
    description: {
        type: String,
        required: [true, "Please provide description"],
        maxlength: 200,
    },
    price: {
        type: Number,
    },
    amount: {
        type: Number,
        default: 1,
    },
    admin: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Admin",
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Meals", MealsSchema);
