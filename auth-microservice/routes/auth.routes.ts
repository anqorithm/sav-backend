import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserById,
  getAllUsers,
} from "../controllers/auth.controller";

const router = express.Router();

// POST /auth/register
router.post("/register", registerUser);

// POST /auth/login
router.post("/login", loginUser);

// POST /auth/logout
router.post("/logout", logoutUser);

// GET /auth/users/:id
router.get("/users/:id", getUserById);

// GET /auth/users
router.get("/users", getAllUsers);

export default router;
