import { Router, Request, Response } from "express";
import { getAllTransactions } from "../services/transactions/getAllTransactions";
import { getTransaction } from "../services/transactions/getTransaction";
import { createTransaction } from "../services/transactions/createTransaction";
import { acceptTransaction } from "../services/transactions/acceptTransaction";
import { cancelTransaction } from "../services/transactions/cancelTransaction";
import { rejectTransaction } from "../services/transactions/rejectTransaction";
import { TransactionData } from "../interfaces/TransactionInterface";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const transactions = await getAllTransactions();
    res.json({ data: transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const transactionId = req.params.id;
    const transactions = await getTransaction(transactionId);
    res.json({ data: transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const transactionData: TransactionData = req.body;
    const createdTransaction = await createTransaction(transactionData);
    res.json({ data: createdTransaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id/accept", async (req: Request, res: Response) => {
  try {
    const transactionId = req.params.id;
    const acceptedTransaction = await acceptTransaction(transactionId);
    res.json({ data: acceptedTransaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id/cancel", async (req: Request, res: Response) => {
  try {
    const transactionId = req.params.id;
    const canceledTransaction = await cancelTransaction(transactionId);
    res.json({ data: canceledTransaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id/reject", async (req: Request, res: Response) => {
  try {
    const transactionId = req.params.id;
    const rejectedTransaction = await rejectTransaction(transactionId);
    res.json({ data: rejectedTransaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
