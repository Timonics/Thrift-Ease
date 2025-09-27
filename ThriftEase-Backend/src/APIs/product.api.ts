import { Request, Response } from "express";
import { Category, Product, SubCategory, User } from "../db/models";
import {
  ProductAttributes,
  ProductCondition,
  ProductCreationAttributes,
  ProductStatus,
} from "../interfaces/product.interface";
import { UserAuthRequest } from "../interfaces/user.interface";

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - categoryId
 *         - subCategoryId
 *         - condition
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the product
 *         name:
 *           type: string
 *           description: The name of the product
 *         description:
 *           type: string
 *           description: Product description
 *         price:
 *           type: number
 *           format: float
 *           description: Product price
 *         image:
 *           type: string
 *           format: uri
 *           description: Product image URL
 *         categoryId:
 *           type: integer
 *           description: ID of the product category
 *         subCategoryId:
 *           type: integer
 *           description: ID of the product subcategory
 *         ownerId:
 *           type: integer
 *           description: ID of the product owner
 *         condition:
 *           type: string
 *           enum: [new, used, refurbished]
 *           description: Product condition
 *         status:
 *           type: string
 *           enum: [available, sold, reserved]
 *           description: Product status
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 1
 *         name: "iPhone 13 Pro"
 *         description: "Brand new iPhone 13 Pro 256GB"
 *         price: 999.99
 *         image: "https://res.cloudinary.com/example/image/upload/iphone13.jpg"
 *         categoryId: 1
 *         subCategoryId: 1
 *         ownerId: 1
 *         condition: "new"
 *         status: "available"
 *         createdAt: "2023-01-01T00:00:00.000Z"
 *         updatedAt: "2023-01-01T00:00:00.000Z"
 *
 *     ProductCreate:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - categoryId
 *         - subCategoryId
 *         - condition
 *         - status
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *           format: float
 *         categoryId:
 *           type: integer
 *         subCategoryId:
 *           type: integer
 *         condition:
 *           type: string
 *           enum: [new, used, refurbished]
 *         status:
 *           type: string
 *           enum: [available, sold, reserved]
 *       example:
 *         name: "iPhone 13 Pro"
 *         description: "Brand new iPhone 13 Pro 256GB"
 *         price: 999.99
 *         categoryId: 1
 *         subCategoryId: 1
 *         condition: "new"
 *         status: "available"
 *
 *     ProductUpdate:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *           format: float
 *         categoryId:
 *           type: integer
 *         subCategoryId:
 *           type: integer
 *         condition:
 *           type: string
 *           enum: [new, used, refurbished]
 *         status:
 *           type: string
 *           enum: [available, sold, reserved]
 *       example:
 *         name: "Updated iPhone 13 Pro"
 *         price: 899.99
 *         status: "reserved"
 *
 *     ProductResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         productDetails:
 *           $ref: '#/components/schemas/Product'
 *
 *     ProductsResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Product'
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         error:
 *           type: string
 *           nullable: true
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product listing
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - categoryId
 *               - subCategoryId
 *               - condition
 *               - status
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               categoryId:
 *                 type: integer
 *               subCategoryId:
 *                 type: integer
 *               condition:
 *                 type: string
 *                 enum: [new, used, refurbished]
 *               status:
 *                 type: string
 *                 enum: [available, sold, reserved]
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product successfully listed"
 *       400:
 *         description: Validation error or missing image
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Category, subcategory, or user not found
 *       500:
 *         description: Internal server error or image upload failed
 */
const createProduct = async (req: Request, res: Response) => {
  const userId = (req as UserAuthRequest).user;
  try {
    const createProductData: ProductCreationAttributes = req.body;
    const { categoryId, subCategoryId, condition, status } = createProductData;

    const category_exists = await Category.findByPk(categoryId);
    if (!category_exists) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    const subcategory_exists = await SubCategory.findByPk(subCategoryId);
    if (!subcategory_exists) {
      res.status(404).json({ message: "Sub-Category not found" });
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

    const imageUrl = (req.file as any).path;
    if (!imageUrl) {
      res.status(500).json({ message: "Image upload failed" });
      return;
    }

    const new_product = await Product.create({
      ...createProductData,
      image: imageUrl,
    });

    if (!new_product) {
      res.status(404).json({ message: "Product is not created" });
      return;
    }
    res.status(200).json({ message: "Product successfully listed" });
  } catch (err: any) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductsResponse'
 *       400:
 *         description: No products found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
const getAllProducts = async (_: Request, res: Response) => {
  try {
    const all_products = await Product.findAll();
    if (!all_products || all_products.length === 0) {
      res.status(400).json({ message: "No products found" });
      return;
    }
    res.status(200).json({ message: "success", products: all_products });
  } catch (err: any) {
    console.error("Error", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

/**
 * @swagger
 * /products/category/{categoryID}:
 *   get:
 *     summary: Get all products by category
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: categoryID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the category to filter products
 *     responses:
 *       200:
 *         description: Products retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductsResponse'
 *       400:
 *         description: No products found in this category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
const getAllProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;

    const categoryId = Number(categoryID);
    if (isNaN(categoryId)) {
      res.status(400).json({ message: "Category ID must be a number" });
      return;
    }

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
  } catch (err: any) {
    console.error("Error", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

/**
 * @swagger
 * /products/{productID}:
 *   get:
 *     summary: Get product details by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to retrieve
 *     responses:
 *       200:
 *         description: Product details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductResponse'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
const getProductDetails = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    const productId = Number(productID);
    if (isNaN(productId)) {
      res.status(400).json({ message: "Product ID must be a number" });
      return;
    }

    const product_details = await Product.findByPk(productId, {
      include: [
        {
          model: Category,
          as: "category",
        },
        {
          model: SubCategory,
          as: "subCategory",
        },
        {
          model: User,
          as: "owner",
          attributes: {
            exclude: ["passwordHash", "role"],
          },
        },
      ],
    });
    if (!product_details) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "success", productDetails: product_details });
  } catch (err: any) {
    console.error("Error: ", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

/**
 * @swagger
 * /products/{productID}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product successfully updated"
 *       400:
 *         description: Validation error
 *       404:
 *         description: Product, category, or subcategory not found
 *       500:
 *         description: Internal server error
 */
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    const productId = Number(productID);
    if (isNaN(productId)) {
      res.status(400).json({ message: "Product ID must be a number" });
      return;
    }

    const userId = (req as UserAuthRequest).user;
    const productUpdateData: Partial<ProductAttributes> = req.body;

    const { categoryId, subCategoryId } = productUpdateData;

    if (categoryId) {
      const category_exists = await Category.findByPk(categoryId);
      if (!category_exists) {
        res.status(404).json({ message: "Category not found" });
        return;
      }
    }

    if (subCategoryId) {
      const subcategory_exists = await SubCategory.findByPk(subCategoryId);
      if (!subcategory_exists) {
        res.status(404).json({ message: "SubCategory not found" });
        return;
      }
    }

    const product_exists = await Product.findOne({
      where: { id: productId, ownerId: userId },
    });
    if (!product_exists) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    const update_product = await Product.update(productUpdateData, {
      where: {
        id: productId,
      },
    });

    if (!update_product) {
      res.status(400).json({ message: "Product was not updated successfully" });
      return;
    }

    res.status(200).json({ message: "Product successfully updated" });
  } catch (err: any) {
    console.error("Error", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

/**
 * @swagger
 * /products/{productID}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productID
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product successfully deleted"
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;

    const productId = Number(productID);
    if (isNaN(productId)) {
      res.status(400).json({ message: "Product ID must be a number" });
      return;
    }

    const delete_product = await Product.destroy({
      where: { id: productId },
    });
    if (!delete_product) {
      res.status(404).json({ message: "Product not deleted" });
      return;
    }
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (err: any) {
    console.error("Error: ", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
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
