import { DataTypes, Model, Sequelize } from "sequelize";
import {
  OrderAttributes,
  OrderCreationAttributes,
} from "../../interfaces/order.interface";
import dbConnect from "../config/dbConnect";

class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  declare id: number;
  declare buyerId: number;
  declare sellerId: number;
  declare productId: number;
  declare status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  declare deliveryOption: string;
  declare deliveryAddress: string | null;
  declare paymentMethod: string;
  declare paymentStatus: "pending" | "paid" | "failed" | "refunded";
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        "pending",
        "paid",
        "shipped",
        "delivered",
        "cancelled"
      ),
      defaultValue: "pending",
    },
    deliveryOption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.ENUM("pending", "paid", "failed", "refunded"),
      defaultValue: "pending",
    },
  },
  {
    sequelize: dbConnect,
    freezeTableName: true,
    timestamps: true,
    tableName: "Order",
  }
);

export { Order };
