import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import gatewayRoutes from "./routes/gateway.routes.js";



// node middlewares setup

app.use(cors())
app.use(morgan('dev'))

// microservices

app.use('/', gatewayRoutes)

// health checker

app.get('/health', (req, res) => {
    res.json({
        "message": "ok",
        "statusCode": 200,
    })
})

export default app;