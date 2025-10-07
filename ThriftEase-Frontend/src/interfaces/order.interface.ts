export interface Order {
  id: number;
  buyerId: number;
  sellerId: number;
  productId: number;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  deliveryOption: string;
  deliveryAddress: string | null;
  paymentMethod: string;
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
}

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

export interface OrderResponse {
  message: string;
  orders: Order[];
}
