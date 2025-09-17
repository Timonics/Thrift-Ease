import { Optional } from "sequelize";

export interface OrderAttributes {
  id: number;
  buyerId: number;
  sellerId: number;
  productId: number;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  deliveryOption: string;
  deliveryAddress?: string | null;
  paymentMethod: string;
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
}

export type OrderCreationAttributes = Optional<
  OrderAttributes,
  "id" | "deliveryAddress" | "status" | "paymentStatus"
>;
