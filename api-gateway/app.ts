import express, { Request, Response, Application } from "express";
const app: Application = express();
import cors from "cors";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes";
import transactionsRoutes from "./routes/transactions.routes";
import authRoutes from "./routes/auth.routes";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import bodyParser = require("body-parser");
import {
  createProxyMiddleware,
  Filter,
  Options,
  RequestHandler,
} from "http-proxy-middleware";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// node middlewares setup

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));

// microservice 1
app.use("/api/v1/products", productsRoutes);

// microservice 3

app.use("/api/v1/transactions", transactionsRoutes);

// microservice 2
app.use("/api/v1/auth", authRoutes);
// Installments microservice
app.use(
  "/api/v1/installments",
  createProxyMiddleware({
    target: process.env.MICROSERVICE3_API_ENDPOINT,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      if ((req.method === "POST" || req.method === "PUT") && req.body) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader("Content-Type", "application/json");
        proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      }
    },
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// health checker

app.get("/health", (req: Request, res: Response) => {
  res.json({
    message: "ok",
    statusCode: 200,
  });
});

export default app;
