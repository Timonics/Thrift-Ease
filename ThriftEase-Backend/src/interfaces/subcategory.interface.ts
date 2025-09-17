import { Optional } from "sequelize";

export interface SubCategoryAttributes {
  id?: number;
  name: string;
  categoryId: number;
  icon: string;
  iconColor: string;
}

export interface SubCategoryCreationAttributes
  extends Optional<SubCategoryAttributes, "id">,
    SubCategoryAttributes {}
