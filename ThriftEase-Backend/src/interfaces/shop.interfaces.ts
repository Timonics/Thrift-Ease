import { Optional } from "sequelize";

export interface ShopAttributes {
  id?: number;
  name: string;
  description: string;
  location: string;
  rating: number;
  contact_phone: string;
  website_url: string;
  ownerId: number
}

export interface ShopCreationAttributes
  extends Optional<ShopAttributes, "id"> {}
