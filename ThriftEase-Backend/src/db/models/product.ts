import { DataTypes, Model } from "sequelize";
import {
  ProductAttributes,
  ProductCondition,
  ProductCreationAttributes,
  ProductStatus,
} from "../../interfaces/product.interface";
import dbConnect from "../config/dbConnect";
import { Category } from "./category";
import { User } from "./user";
import { SubCategory } from "./subcategory";

class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id?: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public categoryId!: number;
  public subCategoryId!: number;
  public ownerId!: number;
  public image!: string;
  public images?: string[];
  public stock!: number;
  public condition!: ProductCondition;
  public negotiable!: boolean;
  public deliveryOptions!: string[];
  public location!: string;
  public status!: ProductStatus;
  public discountPrice?: number;
}

Product.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
    subCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SubCategory,
        key: "id",
      },
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    condition: {
      type: DataTypes.ENUM(...Object.values(ProductCondition)),
      allowNull: false,
    },
    negotiable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    deliveryOptions: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...Object.values(ProductStatus)),
      allowNull: false,
      defaultValue: "Available",
    },
    discountPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Product",
    sequelize: dbConnect,
    freezeTableName: true,
    timestamps: true,
  }
);

export { Product };
