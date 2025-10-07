import { Router } from "express";
const router = Router();

import { protectedRoute } from "../middleware/auth.middleware";
import { getUserOrders } from "../APIs/order.api";

router.get("/my-orders", protectedRoute, getUserOrders);

export default router;
