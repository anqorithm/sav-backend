import { Router, Request, Response } from "express";
const router = Router();

const MICROSERVICE1_API_ENDPOINT = process.env.MICROSERVICE1_API_ENDPOINT;

router.get("/microservice1", async (req: Request, res: Response) => {
  const response = await fetch(MICROSERVICE1_API_ENDPOINT + "/api/v1/products"); // microservice1
  const data = await response.json();
  res.json({
    data: data,
  });
});

export default router;
