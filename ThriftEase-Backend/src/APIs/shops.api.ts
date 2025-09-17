import { Request, Response } from "express";
import {
  ShopAttributes,
  ShopCreationAttributes,
} from "../interfaces/shop.interfaces";
import { Shop } from "../db/models/shop";
import { UserAuthRequest } from "../interfaces/user.interface";
import { User } from "../db/models";

const getAllShops = async (req: Request, res: Response) => {
  try {
    const all_shops = await Shop.findAll();
    if (!all_shops || all_shops.length === 0) {
      res.status(400).json({ message: "No shops found" });
      return;
    }
    res.status(200).json({ message: "success", shops: all_shops });
  } catch (err) {
    console.error(err);
  }
};

const createShop = async (req: Request, res: Response) => {
  try {
    const userId = (req as UserAuthRequest).user;
    const createShopData: ShopCreationAttributes = req.body;

    const user_exists = await User.findByPk(userId);
    if (!user_exists) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const new_shop = await Shop.create({
      ...createShopData,
      ownerId: user_exists.id,
    });

    if (!new_shop) {
      res.status(404).json({ message: "Shop is not created" });
      return;
    }
    res.status(200).json({ message: "Shop successfully created" });
  } catch (err) {
    console.error(err);
  }
};

const updateShop = async (req: Request, res: Response) => {
  try {
    const { shopID } = req.params;

    const shopId = Number(shopID);
    if (isNaN(shopId)) throw new Error("shop param is not a number");

    const ownerId = (req as UserAuthRequest).user;
    const updateShopData: Partial<ShopAttributes> = req.body;

    const new_shop = await Shop.update(
      {
        ...updateShopData,
        ownerId,
      },
      {
        where: {
          id: shopID,
        },
      }
    );

    if (!new_shop) {
      res.status(404).json({ message: "Shop details is not updated" });
      return;
    }
    res.status(200).json({ message: "Shop successfully updated" });
  } catch (err) {
    console.error(err);
  }
};

export { createShop, updateShop, getAllShops };
