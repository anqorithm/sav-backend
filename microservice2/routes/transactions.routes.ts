import express from "express";
import {
  acceptTransaction,
  cancelTransaction,
  createTransaction,
  getTransaction,
  rejectTransaction,
  getAllTransactions,
} from "../controllers/transactions.controller";

const router = express.Router();

router.get("/", getAllTransactions);

// POST /transactions
router.post("/", createTransaction);

// GET /transactions/:id
router.get("/:id", getTransaction);

// PUT /transactions/:id/accept
router.put("/:id/accept", acceptTransaction);

// PUT /transactions/:id/reject
router.put("/:id/reject", rejectTransaction);

// PUT /transactions/:id/cancel
router.put("/:id/cancel", cancelTransaction);

export default router;
