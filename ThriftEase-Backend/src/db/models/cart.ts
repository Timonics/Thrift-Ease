import { DataTypes, Model, Optional } from "sequelize";
import dbConnect from "../config/dbConnect";

interface CartAttributes {
  id: number;
}

interface CartCreationAttributes extends Optional<CartAttributes, "id"> {}

class Cart
  extends Model<CartAttributes, CartCreationAttributes>
  implements CartAttributes
{
  declare id: number;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: dbConnect,
    freezeTableName: true,
    tableName: "Cart"
  }
);
