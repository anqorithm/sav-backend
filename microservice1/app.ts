import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db";

connectDB();

app.use(
  cors({
    origin: "*",
  })
);

/* setup middlewares */
app.use(morgan("dev"));

/* setup routes */
import productsRoutes from "./routes/products.routes";
app.use("/api/v1/products", productsRoutes);

app.get("/", (req: Request, res: Response) => {
  res
    .json({
      message: "hello, this microservice 1",
      statusCode: 200,
    })
    .status(200);
});

app.get("/health", (req: Request, res: Response) => {
  res
    .json({
      message: "ok",
      statusCode: 200,
    })
    .status(200);
});

app.get("*", function (req: Request, res: Response) {
  res
    .json({
      message: "not found",
      statusCode: 404,
    })
    .status(404);
});

export default app;
