import { Router, Request, Response } from "express";
import { getAllProducts } from "../services/getAllProducts";
import { createProduct } from "../services/createProduct";
import { getProductById } from "../services/getProductById";
import { isAuthenticated } from "../middlewares/isAuthenticated ";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.json({ data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {    
    console.log(req.params.id);
    const product = await getProductById(req.params.id);
    res.json({ data: product });
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
