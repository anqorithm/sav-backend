import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";


app.use(cors())
app.use(morgan('dev'))


app.get('/health', (req, res) => {
    res.json({
        "message": "ok",
        "statusCode": 200,
    })
})

export default app;