import { Router } from "express";
const router = Router();

const BASE_URL = 'http://192.168.224.3:9000/health'

router.get("/microservice1", async (req, res) => {
    const request = await fetch(BASE_URL)
    res.json({
        data: request.data
    })
});

export default router;          