"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.mealsSchema = exports.AdminSchema = void 0;
const zod_1 = require("zod");
const PasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PasswordError = "Password must be at least 8 character, include uppercase, lowercase, digit and special character.";
exports.AdminSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "name is required",
        }),
        email: zod_1.z
            .string({
            required_error: "email is required",
        })
            .email({ message: "it must be a valid email" }),
        password: zod_1.z
            .string({
            required_error: "password is required",
        })
            .min(8, {
            message: "password must be 8 characters long or more",
        })
            .regex(PasswordRegex, { message: PasswordError }),
    }),
});
/////^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
exports.mealsSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "name is required",
        })
            .min(2, {
            message: "name must be 2 characters long or more",
        }),
        description: zod_1.z
            .string({
            required_error: "name is required",
        })
            .min(2, {
            message: "description must be 2 characters long or more",
        }),
        price: zod_1.z
            .number({
            required_error: "price is required",
        })
            .positive({ message: "Price must be a postive number" }),
    }),
});
const validate = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    }
    catch (error) {
        return res
            .status(400)
            .json({ message: error.flatten().fieldErrors.body.toString() });
    }
};
exports.validate = validate;
