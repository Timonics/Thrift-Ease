import { Router } from "express";
const router = Router();

import {
  createProduct,
  getProductDetails,
  getAllProductsByCategory,
  updateProduct,
} from "../APIs/product.api";
import { protectedRoute } from "../middleware/auth.middleware";

router.get("/category-products/:categoryID", getAllProductsByCategory);
router.get("/:productID", getProductDetails);
router.post("/new-product", protectedRoute, createProduct);
router.put("/:productID", protectedRoute, updateProduct);

export default router;