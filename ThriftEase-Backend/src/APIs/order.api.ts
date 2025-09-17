import { Request, Response } from "express";
import { Order, Product } from "../db/models";
import { UserAuthRequest } from "../interfaces/user.interface";

type OrderProps = {
  buyerId: number;
  products: Product[];
  deliveryOption: string;
  deliveryAddress: string;
  paymentMethod: string;
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const { orderID } = req.params;

    const orderId = Number(orderID);
    if (!isNaN(orderId)) {
      return "order id parameter is not a number";
    }

    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    res.status(200).json({ message: "success", order });
  } catch (err) {
    console.error(err);
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = (req as UserAuthRequest).user;
    const order: OrderProps = req.body;

    const createdOrder = await Promise.all(
      order.products.map((item) =>
        Order.create({
          buyerId: order.buyerId,
          sellerId: userId,
          productId: item.id!,
          deliveryOption: order.deliveryOption,
          deliveryAddress: order.deliveryAddress,
          paymentMethod: order.paymentMethod,
        })
      )
    );

    if (!createdOrder) {
      res
        .status(400)
        .json({ success: false, message: "Your order could not be created" });
      return;
    }

    res.status(201).json({ success: true, order: createdOrder });
  } catch (err) {
    console.error(err);
  }
};

export { createOrder, getOrder };
