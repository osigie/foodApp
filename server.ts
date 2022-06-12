import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDb from "./database/connect";
import userRouter from "./routes/userRoutes"
import adminRouter from "./routes/adminRoutes"
import mealsRouter from "./routes/mealsRoute"
import ordersRouter from "./routes/orderRoutes"
import morgan from "morgan"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
  }
// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });
app.use("/", userRouter)
app.use("/", adminRouter)
app.use("/", mealsRouter)
app.use("/", ordersRouter)

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL as string);
    app.listen(port, () => {
      console.log(`⚡️server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
