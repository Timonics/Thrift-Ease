import { Router } from "express";
const router = Router();

import { protectedRoute } from "../middleware/auth.middleware";
import {
  getAllUsers,
  getMyProfile,
  registerUser,
  loginUser,
  logoutUser,
} from "../APIs/user.api";

router.get("/", protectedRoute, getAllUsers);
router.get("/my-profile", protectedRoute, getMyProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
