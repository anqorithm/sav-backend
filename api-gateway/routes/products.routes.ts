import { Router, Request, Response } from "express";
import { ProductData } from "../interfaces/ProductInterface";
const router = Router();

const MICROSERVICE1_API_ENDPOINT = process.env.MICROSERVICE1_API_ENDPOINT;
router.get("/", async (req: Request, res: Response) => {
  try {
    console.log(MICROSERVICE1_API_ENDPOINT);
    const response = await fetch(
      MICROSERVICE1_API_ENDPOINT + "/api/v1/products"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Response is not in JSON format");
    }
    const data = await response.json();
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const productData: ProductData = req.body;
    const response = await fetch(
      MICROSERVICE1_API_ENDPOINT + "/api/v1/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Response is not in JSON format");
    }
    const data = await response.json();
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
export default router;