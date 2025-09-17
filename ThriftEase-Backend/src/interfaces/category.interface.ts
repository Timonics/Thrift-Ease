import { Optional } from "sequelize";

export interface CategoryAttributes {
  id?: number;
  name: string;
  description: string;
  icon?: string
  iconColor: string,
  trending?: boolean
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id" | "trending"> {}