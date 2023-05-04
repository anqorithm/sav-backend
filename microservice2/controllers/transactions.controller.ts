import { Request, Response } from "express";
import { Transaction, ITransaction } from "../models/Transaction";

// POST /transactions
export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transactionData: ITransaction = req.body;
    const transaction = await Transaction.create(transactionData);
    res.status(201).json({
      data: {
        message: "Transaction has been created successfully",
        statusCode: 200,
        status: true,
        transaction: transaction,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /transactions/:id
export const getTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(404).json({
        message: "Transaction has not been fetched successfully",
        statusCode: 404,
        status: true,
        transaction: transaction,
      });
    } else {
      res.status(201).json({
        data: {
          message: "Transaction has been fetched successfully",
          statusCode: 200,
          status: true,
          transaction: transaction,
        },
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /transactions/:id/accept
export const acceptTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { status: "accepted" },
      { new: true }
    );
    if (!transaction) {
      res.status(404).json({ message: "Transaction not found" });
    } else {
      res.status(200).json(transaction);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /transactions/:id/reject
export const rejectTransaction = async (req: Request, res: Response) => {
  try {
    const { reason } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { status: "rejected", reason },
      { new: true }
    );
    if (!transaction) {
      res.status(404).json({ message: "Transaction not found" });
    } else {
      res.status(200).json(transaction);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /transactions/:id/cancel
export const cancelTransaction = async (req: Request, res: Response) => {
  try {
    const { reason } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { status: "canceled", reason },
      { new: true }
    );
    if (!transaction) {
      res.status(404).json({ message: "Transaction not found" });
    } else {
      res.status(200).json(transaction);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
