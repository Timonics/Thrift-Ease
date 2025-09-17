import { Router } from "express";
const router = Router();

import { protectedRoute } from "../middleware/auth.middleware";
import { getAllShops, createShop, updateShop } from "../APIs/shops.api";

router.get("/", getAllShops);
router.post("/new-shop", protectedRoute, createShop);
router.post("/update-shop/:shopID", protectedRoute, updateShop);

export default router;
