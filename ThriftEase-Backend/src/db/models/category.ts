import { DataTypes, Model } from "sequelize";
import {
  CategoryAttributes,
  CategoryCreationAttributes,
} from "../../interfaces/category.interface";
import dbConnect from "../config/dbConnect";

class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  declare id?: number;
  declare name: string;
  declare description: string;
  declare icon?: string;
  declare iconColor: string;
  declare trending: boolean;
}

Category.init(
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
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "shopping-bag",
    },
    iconColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trending: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "Category",
    sequelize: dbConnect,
    freezeTableName: true,
    timestamps: true,
  }
);

export { Category };
