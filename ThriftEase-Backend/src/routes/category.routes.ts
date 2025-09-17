import { Router } from "express";
const router = Router();

import {
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory
} from "../APIs/category.api";
import { getAllCategorySubCategories } from "../APIs/subcategory.api";

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Category management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: Optional description of the category
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 1
 *         name: "Electronics"
 *         description: "Electronic devices and accessories"
 *         createdAt: "2023-01-01T00:00:00.000Z"
 *         updatedAt: "2023-01-01T00:00:00.000Z"
 * 
 *     CategoryCreate:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: Optional description of the category
 *       example:
 *         name: "Electronics"
 *         description: "Electronic devices and accessories"
 * 
 *     CategoryUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: Optional description of the category
 *       example:
 *         name: "Updated Electronics"
 *         description: "Updated description"
 * 
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *         error:
 *           type: string
 *           nullable: true
 * 
 *     SuccessResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         categories:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Category'
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of all categories retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       400:
 *         description: No categories found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllCategories);

/**
 * @swagger
 * /categories/{categoryID}/sub-categories:
 *   get:
 *     summary: Get all sub-categories for a specific category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the category to get sub-categories for
 *     responses:
 *       200:
 *         description: Sub-categories retrieved successfully
 *       400:
 *         description: Invalid category ID or no sub-categories found
 *       500:
 *         description: Internal server error
 */
router.get("/:categoryID/sub-categories", getAllCategorySubCategories);

/**
 * @swagger
 * /categories/new-category:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryCreate'
 *     responses:
 *       200:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Category name already exists or validation failed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.post("/new-category", createCategory);

/**
 * @swagger
 * /categories/update-category/{categoryID}:
 *   post:
 *     summary: Update an existing category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the category to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryUpdate'
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Category not found or validation failed
 *       500:
 *         description: Internal server error
 */
router.post("/update-category/:categoryID", updateCategory);

/**
 * @swagger
 * /categories/{categoryID}:
 *   delete:
 *     summary: Delete a category (Admin only)
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the category to delete
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       400:
 *         description: Invalid category ID or category not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:categoryID", deleteCategory);

export default router;