import { z, AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

const PasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PasswordError =
  "Password must be at least 8 character, include uppercase, lowercase, digit and special character.";

export const AdminSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
      })
      .max(20, {
        message: "name must not be more than 20 characters long",
      }),
    email: z
      .string({
        required_error: "email is required",
      })
      .email({ message: "it must be a valid email" })
      .max(20, {
        message: "email must not be more than 20 characters long",
      }),
    password: z
      .string({
        required_error: "password is required",
      })
      .min(8, {
        message: "password must be 8 characters long or more",
      })
      .max(50, {
        message: "password must not be more than 50 characters long",
      })
      .regex(PasswordRegex, { message: PasswordError }),
  }),
});

/////^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const mealsSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
      })
      .max(2, {
        message: "name must be 2 characters long or more",
      })
      .max(50, {
        message: "name must not be more than 50 characters long",
      }),

    description: z
      .string({
        required_error: "name is required",
      })
      .max(2, {
        message: "description must be 2 characters long or more",
      })
      .max(50, {
        message: "description must not be more than 50 characters long",
      }),
    price: z
      .number({
        required_error: "price is required",
      })
      .positive({ message: "Price must be a postive number" }),
    amount: z
      .number({
        required_error: "amount is required",
      })
      .positive({ message: "Amount must be a postive number" }),
  }),
});

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };
