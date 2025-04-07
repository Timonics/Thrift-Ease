import { Router } from "express";
const router = Router();

import {getAllCategorySubCategories} from "../APIs/subcategory";

router.get("/category/:categoryID", getAllCategorySubCategories);

export default router;
