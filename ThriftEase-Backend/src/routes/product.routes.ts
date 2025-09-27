import { Router } from "express";
const router = Router();

import {
  createProduct,
  getProductDetails,
  getAllProductsByCategory,
  updateProduct,
  getAllProducts,
  deleteProduct,
} from "../APIs/product.api";
import { protectedRoute } from "../middleware/auth.middleware";
import { upload } from "../config/cloudinaryConfig";

// routes/product.routes.ts
/**
 * @swagger
 * /products:
 *   post:
 *     # ... (documentation will be inherited from controller)
 */
router.post("/", protectedRoute, upload.single("image"), createProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     # ... (documentation will be inherited from controller)
 */
router.get("/", getAllProducts);

/**
 * @swagger
 * /products/category/{categoryID}:
 *   get:
 *     # ... (documentation will be inherited from controller)
 */
router.get("/category/:categoryID", getAllProductsByCategory);

/**
 * @swagger
 * /products/{productID}:
 *   get:
 *     # ... (documentation will be inherited from controller)
 */
router.get("/:productID", getProductDetails);

/**
 * @swagger
 * /products/{productID}:
 *   put:
 *     # ... (documentation will be inherited from controller)
 */
router.put("/:productID", protectedRoute, updateProduct);

/**
 * @swagger
 * /products/{productID}:
 *   delete:
 *     # ... (documentation will be inherited from controller)
 */
router.delete("/:productID", protectedRoute ,deleteProduct);

export default router;
