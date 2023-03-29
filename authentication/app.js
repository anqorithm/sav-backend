import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        "message": "hello, this microservice 1",
        "statusCode": 200,
    }).status(200)
})

app.get('/health', (req, res) => {
    res.json({
        "message": "ok",
        "statusCode": 200,
    }).status(200)
})

app.get('*', function (req, res) {
    res.json({
        "message": "not found",
        "statusCode": 404,
    }).status(404)
});

export default app;