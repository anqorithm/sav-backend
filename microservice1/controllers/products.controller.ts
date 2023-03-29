import { Response, Request } from "express";
import { IProduct, Product } from "../models/Product";

const getProducts = async (req: Request, res: Response) => {};
const getProductById = async (req: Request, res: Response) => {};
const addProduct = async (req: Request, res: Response) => {};
const updateProduct = async (req: Request, res: Response) => {};
const deleteProduct = async (req: Request, res: Response) => {};

export default {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
