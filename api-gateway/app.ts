import express, { Request, Response, Application } from "express";
const app: Application = express();
import cors from "cors";
import morgan from "morgan";
import gatewayRoutes from "./routes/gateway.routes";

// node middlewares setup

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));

// microservices

app.use("/", gatewayRoutes);

// health checker

app.get("/health", (req: Request, res: Response) => {
  res.json({
    message: "ok",
    statusCode: 200,
  });
});

export default app;
