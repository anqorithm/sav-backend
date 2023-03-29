import express from "express";
const router = express.Router();
import controller from "../controllers/products.controller";

router.get("/", controller.getProducts);
router.post("/", controller.createProduct);
router.get("/:id", controller.getProductById);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

export default router;
