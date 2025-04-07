import { Response } from "express";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";

config();

const generateToken = (userId: number, res: Response) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET not found");
  }

  const token = sign({ userId }, secret, {
    expiresIn: "1h",
    algorithm: "HS256",
  });

  res.cookie("jwt_token", token, {
    httpOnly: true,
    maxAge: 1 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === "production" ? true : false,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
  return token;
};

const clearToken = (res: Response) => {
  res.clearCookie("jwt_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
  return true;
};

export { generateToken, clearToken };
