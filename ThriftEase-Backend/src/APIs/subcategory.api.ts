import { Request, Response } from "express";
import { Category, SubCategory } from "../db/models";
import { SubCategoryAttributes } from "../interfaces/subcategory.interface";

//admin level
const createSubCategory = async (req: Request, res: Response) => {
  try {
    const { name, categoryId, icon, iconColor } = req.body;

    const category_exists = await Category.findByPk(categoryId);
    if (!category_exists) {
      res
        .status(400)
        .json({ success: false, message: "Category does not exists" });
      return;
    }

    const subCategoryData: SubCategoryAttributes = {
      name,
      categoryId,
      icon,
      iconColor,
    };
    if (!subCategoryData) {
      console.log("SubCategory data is invalid");
      return;
    }

    const new_subcategory = await SubCategory.create({
      name: subCategoryData.name,
      categoryId: subCategoryData.categoryId,
      icon,
      iconColor,
    });
    if (!new_subcategory) {
      res.status(400).json({ message: "The SubCategory could not be created" });
    }

    res.status(200).json({
      message: `Successfully created category ${new_subcategory.name}`,
    });
  } catch (err) {
    console.error(err);
  }
};

//admin level
const getAllSubCategories = async (_: Request, res: Response) => {
  try {
    const all_subcategories = await SubCategory.findAll();
    if (!all_subcategories || all_subcategories.length === 0) {
      res.status(400).json({ message: "No SubCategories found" });
      return;
    }
    res.status(200).json({ message: "success", categories: all_subcategories });
  } catch (err) {
    console.error(err);
  }
};

//user level
const getAllCategorySubCategories = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;
    const category_exists = await Category.findByPk(categoryID);
    if (!category_exists) {
      res
        .status(400)
        .json({ success: false, message: "Category does not exists" });
    }

    const all_subcategories_under_category = await SubCategory.findAll({
      where: {
        categoryId: categoryID,
      },
    });

    if (
      !all_subcategories_under_category ||
      all_subcategories_under_category.length === 0
    ) {
      res.status(400).json({ message: "No SubCategories found" });
    }
    res.status(200).json({
      message: "success",
      categories: all_subcategories_under_category,
    });
  } catch (err) {
    console.error(err);
  }
};

//admin level
const deleteSubCategory = async (req: Request, res: Response) => {
  const { subcategoryID } = req.params;
  const subcategory_exists = await SubCategory.findByPk(subcategoryID);
  if (!subcategory_exists) {
    res.status(400).json({ message: "SubCategory not found" });
    return;
  }
  const delete_subcategory = await SubCategory.destroy({
    where: {
      id: subcategoryID,
    },
  });
  if (!delete_subcategory) {
    res.status(400).json({ message: "SubCategory not deleted" });
    return;
  }
  res
    .status(200)
    .json({ message: `Category ${subcategory_exists.name} has been deleted` });
};

export {
  createSubCategory,
  getAllSubCategories,
  deleteSubCategory,
  getAllCategorySubCategories,
};
