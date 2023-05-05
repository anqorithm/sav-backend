import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed: No token provided" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string); // Verify token
    // req._id = (decodedToken as any)._id; // Save user ID in request object
    next(); // Call next middleware
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ message: "Authentication failed: Invalid token" });
  }
};
