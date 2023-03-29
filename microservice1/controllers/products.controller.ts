import { Response, Request, NextFunction } from "express";
import { IProduct, Product } from "../models/Product";

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products: Array<IProduct> = await Product.find();
    res
      .json({
        data: {
          message: "Products has been fetched successfully",
          statusCode: 200,
          status: true,
          products: products,
        },
      })
      .status(200);
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
    res
      .json({
        data: {
          message: "Product has been created successfully",
          statusCode: 201,
          status: true,
          product: product,
        },
      })
      .status(201);
  } catch (error: any) {
    next(error);
  }
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const product: IProduct | null = await Product.findById(productId);
    if (!product) {
      const error = new Error("Product not found");
      res.status(404);
      throw error;
    }
    res.json({
      data: product,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const updates = req.body;
    const options = { new: true };
    const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(
      productId,
      updates,
      options
    );
    if (!updatedProduct) {
      const error = new Error("Product not found");
      res.status(404);
      throw error;
    }
    res.json({
      data: updatedProduct,
      message: "Product updated successfully",
    });
  } catch (error: any) {
    next(error);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const deletedProduct: IProduct | null = await Product.findByIdAndDelete(
      productId
    );
    if (!deletedProduct) {
      const error = new Error("Product not found");
      res
        .json({
          data: {
            product: null,
            message: "Product not found",
            statusCode: 404,
            status: false,
          },
        })
        .status(404);
      throw error;
    }
    res.json({
      data: deletedProduct,
      message: "Product deleted successfully",
    });
  } catch (error: any) {
    next(error);
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
