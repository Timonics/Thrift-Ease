import { Request, Response } from "express";
import { Category, Product, SubCategory, User } from "../db/models";
import {
  ProductCondition,
  ProductStatus,
} from "../interfaces/product.interface";
import { UserAuthRequest } from "../interfaces/user.interface";
import cloudinary from "../config/cloudinaryConfig";

const createProduct = async (req: Request, res: Response) => {
  const userId = (req as UserAuthRequest).user;
  try {
    const {
      name,
      description,
      price,
      categoryId,
      subCategoryId,
      stock,
      condition,
      negotiable,
      deliveryOptions,
      location,
      status,
      discountPrice,
    } = req.body;

    const category_exists = await Category.findByPk(categoryId);
    if (!category_exists) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    const subcategory_exists = await SubCategory.findByPk(subCategoryId);
    if (!subcategory_exists) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    const user_exists = await User.findByPk(userId);
    if (!user_exists) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (!Object.values(ProductCondition).includes(condition)) {
      res.status(400).json({ message: "Invalid product condition." });
      return;
    }

    if (!Object.values(ProductStatus).includes(status)) {
      res.status(400).json({ message: "Invalid product status." });
      return;
    }

    if (!req.file) {
      res.status(400).json({ message: "Image upload required" });
      return;
    }

    const base64Image = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    const uploaderResponse = await cloudinary.uploader.upload(base64Image, {
      folder: "products",
    });

    if (!uploaderResponse.secure_url) {
      res.status(500).json({ message: "Image upload failed" });
      return;
    }

    const imageUrl = uploaderResponse.secure_url;

    const new_product = await Product.create({
      name,
      description,
      price,
      categoryId,
      subCategoryId,
      ownerId: userId,
      image: imageUrl,
      stock,
      condition,
      negotiable,
      deliveryOptions,
      location,
      status,
      discountPrice,
    });

    if (!new_product) {
      res.status(404).json({ message: "Product is not created" });
      return;
    }
    res.status(200).json({ message: "Product successfully listed" });
  } catch (err) {
    console.error(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const all_products = await Product.findAll();
    if (!all_products || all_products.length === 0) {
      res.status(400).json({ message: "No products found" });
      return;
    }
    res.status(200).json({ message: "success", categories: all_products });
  } catch (err) {
    console.error("Error", err);
  }
};

const getAllProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;

    const categoryId = Number(categoryID);
    if (isNaN(categoryId)) throw new Error("Category param is not a number");

    const category_exists = await Category.findByPk(categoryId);
    if (!category_exists) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    const all_products_under_category = await Product.findAll({
      where: {
        categoryId: categoryId,
      },
    });
    if (
      !all_products_under_category ||
      all_products_under_category.length === 0
    ) {
      res.status(400).json({
        message: `No products under category ${category_exists.name} is found`,
      });
      return;
    }
    res
      .status(200)
      .json({ message: "success", products: all_products_under_category });
  } catch (err) {
    console.error("Error", err);
  }
};

const getProductDetails = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    const productId = Number(productID);
    if (isNaN(productId)) throw new Error("Product param is not a number");

    const product_details = await Product.findByPk(productId);
    if (!product_details) {
      res.status(404).json({ message: "No products found" });
      return;
    }
    res
      .status(200)
      .json({ message: "success", productDetails: product_details });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const { productID } = req.params;

  const productId = Number(productID);
  if (isNaN(productId)) throw new Error("Product param is not a number");

  const userId = (req as UserAuthRequest).user;
  const {
    name,
    description,
    price,
    categoryId,
    subCategoryId,
    image,
    stock,
    condition,
    negotiable,
    deliveryOptions,
    location,
    status,
    discountPrice,
  } = req.body;

  const category_exists = await Category.findByPk(categoryId);
  if (!category_exists) {
    res.status(404).json({ message: "Category not found" });
    return;
  }

  const subcategory_exists = await SubCategory.findByPk(subCategoryId);
  if (!subcategory_exists) {
    res.status(404).json({ message: "SubCategory not found" });
    return;
  }

  const product_exists = await Product.findOne({
    where: { id: productId, ownerId: userId },
  });
  if (!product_exists) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  const update_product = await Product.update(
    {
      name,
      description,
      price,
      categoryId,
      subCategoryId,
      ownerId: userId,
      image,
      stock,
      condition,
      negotiable,
      deliveryOptions,
      location,
      status,
      discountPrice,
    },
    {
      where: {
        id: productId,
      },
    }
  );

  if (!update_product) {
    res.status(400).json({ message: "Product was not updated successfully" });
    return;
  }

  res.status(200).json({ message: "Product successfully updated" });
  try {
  } catch (err) {
    console.error("Error", err);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    const productId = Number(productID);
    if (isNaN(productId)) throw new Error("Product param is not a number");

    const delete_product = await Product.destroy({
      where: { id: productId },
    });
    if (!delete_product) {
      res.status(404).json({ message: "Product not deleted" });
      return;
    }
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (err) {
    console.error("Error: ", err);
  }
};

export {
  createProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
  getAllProductsByCategory,
};
