import { DataTypes, Model } from "sequelize";
import {
  SubCategoryAttributes,
  SubCategoryCreationAttributes,
} from "../../interfaces/subcategory.interface";
import dbConnect from "../config/dbConnect";
import { Category } from "./category";

class SubCategory
  extends Model<SubCategoryAttributes, SubCategoryCreationAttributes>
  implements SubCategoryAttributes
{
  declare id?: number;
  declare name: string;
  declare categoryId: number
}

SubCategory.init(
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id"
      }
    },
  },
  {
    sequelize: dbConnect,
    tableName: "SubCategory",
    freezeTableName: true,
    timestamps: true,
  }
);

export { SubCategory };
