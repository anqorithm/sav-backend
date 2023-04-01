import { Router, Request, Response } from "express";
const router = Router();

router.get("/microservice1", async (req: Request, res: Response) => {
  const response = await fetch("http://localhost:5001");
  const data = await response.json();
  res.json({
    data: data,
  });
});

export default router;
