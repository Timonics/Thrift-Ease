import { User } from "../db/models";
import { Request, Response } from "express";
import { compareSync, hashSync } from "bcryptjs";
import { clearToken, generateToken } from "../utils/token.utils";
import { UserAuthRequest, UserRole } from "../interfaces/user.interface";

const getAllUsers = async (_: Request, res: Response) => {
  try {
    const allUsers = await User.findAll();
    if (!allUsers || allUsers.length === 0) {
      res.status(400).json({ message: "No users found" });
      return;
    }
    res.status(200).json({ message: "success", users: allUsers });
  } catch (err) {
    console.error(err);
  }
};

const getUserCount = async (_: Request, res: Response) => {
  try {
    const userCount = await User.count();
    res.status(200).json({ message: "success", count: userCount });
  } catch (err) {
    console.error(err);
  }
};

const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const userId = Number(userID);
    if (isNaN(userId)) {
      res.status(400).json({ message: "User ID must be a number" });
      return;
    }

    const user = await User.findByPk(userId);
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    res.status(200).json({ message: "success", profile: user });
  } catch (err) {
    console.error(err);
  }
};

const getMyProfile = async (req: Request, res: Response) => {
  try {
    const userID = (req as UserAuthRequest).user;
    const user = await User.findByPk(userID);
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    res.status(200).json({ message: "success", profile: user });
  } catch (err) {
    console.error(err);
  }
};

const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;
    const checkUserExists = await User.findOne({
      where: {
        email,
      },
    });
    if (checkUserExists) {
      res.status(400).json({ message: "This user already exists" });
      return;
    }

    const passwordHash = hashSync(password, 10);
    const isValidPassword = compareSync(confirmPassword, passwordHash);

    if (!isValidPassword) {
      res.status(400).json({ message: "Password confirmation do not match" });
      return;
    }

    const user = await User.create({
      name,
      email,
      passwordHash,
      isSeller: false,
      role: role ?? UserRole.USER,
    });

    if (!user) {
      res.status(400).json({ message: "Failed to create user" });
      return;
    }

    res.status(201).json({ message: "User Created Successfully", user });
  } catch (err) {
    console.error(err);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const checkUserExists = await User.findOne({
      where: {
        email,
      },
    });
    if (!checkUserExists) {
      res.status(400).json({ message: "This user does not exists" });
      return;
    }

    const isValidPassword = compareSync(password, checkUserExists.passwordHash);
    if (!isValidPassword) {
      res.status(400).json({ message: "Password not correct" });
      return;
    }

    const token = generateToken(checkUserExists.id, checkUserExists.role, res);
    if (!token) {
      res.status(400).json({ message: "Token Error: Token not generated" });
    }

    res.status(200).json({
      message: "Logged in successfully",
      user: {
        id: checkUserExists.id,
        name: checkUserExists.name,
        email: checkUserExists.email,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const logoutUser = async (_: Request, res: Response) => {
  try {
    const logout = clearToken(res);
    if (!logout) {
      res.status(400).json({ message: "Logout was unsuccessful" });
      return;
    }
    res.status(200).json({ message: "You have been successfully logged out." });
  } catch (err) {
    console.error(err);
  }
};

export {
  getAllUsers,
  getMyProfile,
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  getUserCount,
};
