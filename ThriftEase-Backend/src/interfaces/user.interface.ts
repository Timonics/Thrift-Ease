import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Optional } from "sequelize";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  passwordHash: string;
  isSeller: boolean
  role: UserRole;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}

export interface CustomJWTPayload extends JwtPayload {
  userId: number;
  role: UserRole
}

export interface UserAuthRequest extends Request {
  user: number;
}
