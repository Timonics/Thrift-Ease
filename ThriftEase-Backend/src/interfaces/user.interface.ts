import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"
import { Optional } from "sequelize"

export interface UserAttributes {
    id?: number
    name: string
    email: string
    passwordHash: string
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export interface CustomJWTPayload extends JwtPayload {
    userId: number
}

export interface UserAuthRequest extends Request {
    user: number
}