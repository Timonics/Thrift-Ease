import { Category } from "../db/models";
import { Request, Response } from "express";
import { CategoryAttributes } from "../interfaces/category.interface";
import dbConnect from "../db/config/dbConnect";

//admin level
const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const categoryData: CategoryAttributes = { name, description };

    const category_name_exists = await Category.findOne({
      where: {
        name: categoryData.name,
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

    const new_category = await Category.create({
      name: categoryData.name,
      description: categoryData.description,
    });
    if (!new_category) {
      res.status(400).json({ message: "The Category could not be created" });
    }

    res
      .status(200)
      .json({ message: `Successfully created category ${new_category.name}` });
  } catch (err) {
    console.error(err);
  }
};

//user level
const getAllCategories = async (req: Request, res: Response) => {
  try {
    const all_categories = await Category.findAll();
    if (!all_categories || all_categories.length === 0) {
      res.status(400).json({ message: "No categories found" });
      return;
    }
    res.status(200).json({ message: "success", categories: all_categories });
  } catch (err) {
    console.error(err);
  }
};

//admin level
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
  } catch (err) {
    console.error(err);
  }
};

export { createCategory, getAllCategories, deleteCategory };
