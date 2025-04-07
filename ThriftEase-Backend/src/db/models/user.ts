import {
  UserAttributes,
  UserCreationAttributes,
} from "../../interfaces/user.interface";
import dbConnect from "../config/dbConnect";
import { DataTypes, Model } from "sequelize";

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public passwordHash!: string;
}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConnect,
    tableName: "User",
    freezeTableName: true,
    timestamps: true,
  }
);

export { User };
