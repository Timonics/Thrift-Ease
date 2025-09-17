import { Model, DataTypes } from "sequelize";
import dbConnect from "../config/dbConnect";
import {
  ShopAttributes,
  ShopCreationAttributes,
} from "../../interfaces/shop.interfaces";
import { User } from "./user";

class Shop
  extends Model<ShopAttributes, ShopCreationAttributes>
  implements ShopAttributes
{
  declare name: string;
  declare description: string;
  declare location: string;
  declare rating: number;
  declare contact_phone: string;
  declare website_url: string;
  declare ownerId: number;
}
Shop.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0,
    },
    contact_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize: dbConnect,
    tableName: "Shop",
    freezeTableName: true,
    timestamps: true,
  }
);

export { Shop };
