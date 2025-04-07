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
  public id?: number;
  public name!: string;
  public description!: string;
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
  },
  {
    tableName: "Category",
    sequelize: dbConnect,
    freezeTableName: true,
    timestamps: true,
  }
);

export { Category };
