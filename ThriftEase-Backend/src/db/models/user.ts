import {
  UserAttributes,
  UserCreationAttributes,
  UserRole,
} from "../../interfaces/user.interface";
import dbConnect from "../config/dbConnect";
import { DataTypes, Model } from "sequelize";

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  declare id: number;
  declare name: string;
  declare email: string;
  declare passwordHash: string;
  declare isSeller: boolean;
  declare role: UserRole;
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
    isSeller: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(UserRole)),
      defaultValue: "user",
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
