import { Router, Request, Response } from "express";
import { registerUser } from "../services/auth/Register";
import { createProduct } from "../services/createProduct";
const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.json({ data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const product = await createProduct(productData);
    res.json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
