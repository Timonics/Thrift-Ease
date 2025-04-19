import { DataTypes, Model, Optional } from "sequelize";
import dbConnect from "../config/dbConnect";
import { User } from "./user";

interface CartAttributes {
  id: number;
  ownerId: number;
}

interface CartCreationAttributes extends Optional<CartAttributes, "id"> {}

class Cart
  extends Model<CartAttributes, CartCreationAttributes>
  implements CartAttributes
{
  declare id: number;
  declare ownerId: number;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize: dbConnect,
    freezeTableName: true,
    tableName: "Cart",
  }
);
