import { Category } from "../db/models";
import { Request, Response } from "express";
import { CategoryAttributes, CategoryCreationAttributes } from "../interfaces/category.interface";
import dbConnect from "../db/config/dbConnect";

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
 *                   example: "Successfully created category Electronics"
 *       400:
 *         description: Category name already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Category name already exists"
 *       500:
 *         description: Internal server error
 */
const createCategory = async (req: Request, res: Response) => {
  try {
    const createCategoryData: CategoryCreationAttributes = req.body;

    const category_name_exists = await Category.findOne({
      where: {
        name: createCategoryData.name,
      },
    });
    if (category_name_exists) {
      res
        .status(400)
        .json({ success: false, message: "Category name already exists" });
      return;
    }

    //resets the id sequence to the highest existing id
    await dbConnect.query(
      `SELECT setval('"Category_id_seq"', (SELECT MAX(id) FROM "Category"));`
    );

    const new_category = await Category.create(createCategoryData);
    if (!new_category) {
      res.status(400).json({ message: "The Category could not be created" });
      return;
    }

    res
      .status(200)
      .json({ message: `Successfully created category ${new_category.name}` });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "success"
 *                 categories:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Category'
 *       400:
 *         description: No categories found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No categories found"
 *       500:
 *         description: Internal server error
 */
const getAllCategories = async (req: Request, res: Response) => {
  try {
    const all_categories = await Category.findAll();
    if (!all_categories || all_categories.length === 0) {
      res.status(400).json({ message: "No categories found" });
      return;
    }
    res.status(200).json({ message: "success", categories: all_categories });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category Electronics has been deleted"
 *       400:
 *         description: Invalid category ID or category not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid category ID"
 *       500:
 *         description: Internal server error
 */
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;

    // Convert to number to avoid type issues
    const categoryIdNumber = Number(categoryID);

    if (isNaN(categoryIdNumber)) {
      res.status(400).json({ message: "Invalid category ID" });
      return;
    }
    const category_exists = await Category.findByPk(categoryIdNumber);
    if (!category_exists) {
      res.status(400).json({ message: "Category not found" });
      return;
    }
    const delete_category = await Category.destroy({
      where: {
        id: categoryIdNumber,
      },
    });
    if (!delete_category) {
      res.status(400).json({ message: "Category not deleted" });
      return;
    }

    //Reorder the IDs if the ID is greater then the deleted ID
    await dbConnect.query(`
      UPDATE "Category"
      SET id = id - 1
      WHERE id > ${categoryIdNumber};
    `);

    // Reset the ID sequence, set to 1 if IDs are not found/null
    await dbConnect.query(`
      SELECT setval('"Category_id_seq"', COALESCE((SELECT MAX(id) FROM "Category"), 1), false);
    `);

    res
      .status(200)
      .json({ message: `Category ${category_exists.name} has been deleted` });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category successfully updated"
 *       400:
 *         description: Category not found or validation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Category was not updated"
 *       500:
 *         description: Internal server error
 */
const updateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;
    const categoryData: Partial<CategoryAttributes> = req.body;

    const updatedCategory = await Category.update(categoryData, {
      where: { id: categoryID },
    });

    if (!updatedCategory) {
      res.status(400).json({ message: "Category was not updated" });
      return;
    }

    res.status(200).json({ message: "Category successfully updated" });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

export { createCategory, getAllCategories, deleteCategory, updateCategory };