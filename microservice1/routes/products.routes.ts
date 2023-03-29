import express from "express";
const router = express.Router();
import controller from "../controllers/products.controller";

router.get("/", controller.getProducts);
router.get("/:id", controller.getProductById);
router.post("/:id", controller.addProduct);

export default router;
