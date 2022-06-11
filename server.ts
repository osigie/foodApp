import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDb from "./database/connect";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});



const start = async () => {
    try {
      await connectDb(process.env.MONGO_URL as string);
      app.listen(port, () => {
        console.log(`server running on port ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  start();