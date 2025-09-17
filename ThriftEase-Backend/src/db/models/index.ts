import { Category } from "./category";
import { Order } from "./order";
import { Product } from "./product";
import { Shop } from "./shop";
import { SubCategory } from "./subcategory";
import { User } from "./user";

// Category and Product Relationship
Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

//Category and SubCategory Relationship
Category.hasMany(SubCategory, {
  foreignKey: "categoryId",
  as: "subCategories",
});
SubCategory.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

// SubCategory and Product Relationship
SubCategory.hasMany(Product, { foreignKey: "subCategoryId", as: "products" });
Product.belongsTo(SubCategory, {
  foreignKey: "subCategoryId",
  as: "subCategory",
});

// User and Product Relationship
User.hasMany(Product, { foreignKey: "ownerId", as: "myProducts" });
Product.belongsTo(User, { foreignKey: "ownerId", as: "owner" });

//User and Shop Relationship
User.hasOne(Shop, { foreignKey: "ownerId", as: "myShop" });
Shop.belongsTo(User, { foreignKey: "ownerId" as "owner" });

//User and Order Relationship 
User.hasMany(Order, { foreignKey: "buyerId", as: "purchases" });
Order.belongsTo(User, { foreignKey: "buyerId", as: "buyer" });

User.hasMany(Order, { foreignKey: "sellerId", as: "sales" });
Order.belongsTo(User, { foreignKey: "sellerId", as: "seller" });

// Order and Product Relationship
Product.hasOne(Order, { foreignKey: "productId", as: "order" });
Order.belongsTo(Product, { foreignKey: "productId", as: "product" });


export { Category, Product, User, SubCategory, Order };
