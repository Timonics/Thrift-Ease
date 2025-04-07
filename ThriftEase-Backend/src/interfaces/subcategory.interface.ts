import { Optional } from "sequelize";

export interface SubCategoryAttributes {
  id?: number;
  name: string;
  categoryId: number
}

export interface SubCategoryCreationAttributes
  extends Optional<SubCategoryAttributes, "id">,
    SubCategoryAttributes {}
