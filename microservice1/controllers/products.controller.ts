import { Response, Request, NextFunction } from "express";
import { IProduct, Product } from "../models/Product";

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products: Array<IProduct> = await Product.find();
    res.json({
      data: products,
    });
  } catch (error: any) {
    next(error);
  }
};

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const { name, description, price, imageUrl } = req.body;
    const product: IProduct = new Product({
      name,
      description,
      price,
      imageUrl,
    });
    await product.save();
    res.status(201).json({
      data: product,
      message: "Product created successfully",
    });
  } catch (error: any) {
    next(error);
  }
};

const getProductById = async (req: Request, res: Response) => {};
const updateProduct = async (req: Request, res: Response) => {};
const deleteProduct = async (req: Request, res: Response) => {};

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
