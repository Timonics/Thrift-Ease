import { Router } from "express";
const router = Router();

import {
  createCategory,
  getAllCategories,
  deleteCategory,
} from "../APIs/category.api";

router.get("/", getAllCategories);
router.post("/new-category", createCategory);
router.delete("/:categoryID", deleteCategory);

export default router