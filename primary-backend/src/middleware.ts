import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization as unknown as string;
  try {
    const payload = jwt.verify(token, JWT_PASSWORD) as { id: string };
    if (payload && payload.id) {
      req.id = payload.id;
    }
    next();
  } catch (err) {
    return res.status(403).json({
      message: "You are not logged in",
    });
  }
}
