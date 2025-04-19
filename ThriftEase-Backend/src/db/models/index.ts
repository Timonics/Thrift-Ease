import { Category } from "./category";
import { Product } from "./product";
import { SubCategory } from "./subcategory";
import { User } from "./user";

// Category and Product Relationship
Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

//Category and SubCategory Relationship
Category.hasMany(SubCategory, {foreignKey: "categoryId", as: "subCategories"})
SubCategory.belongsTo(Category, {foreignKey: "categoryId", as: "category"})

// SubCategory and Product Relationship
SubCategory.hasMany(Product, {foreignKey: "subCategoryId", as: "products"})
Product.belongsTo(SubCategory, {foreignKey: "subCategoryId", as: "subCategory"})

// User and Product Relationship
User.hasMany(Product, { foreignKey: "ownerId", as: "myProducts" });
Product.belongsTo(User, { foreignKey: "ownerId", as: "owner" });

export { Category, Product, User, SubCategory };