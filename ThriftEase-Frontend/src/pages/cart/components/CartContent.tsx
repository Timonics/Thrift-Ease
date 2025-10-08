import {
  ArrowRight,
  Heart,
  RotateCcw,
  Shield,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";
import React from "react";
import Card from "../../../components/card";
import { Link } from "react-router";
import type { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../store/slices/cart.slice";
import type { Product } from "../../../interfaces/product.interface";

import emptyCart from "../../../assets/svg/empty-cart.svg";

const CartContent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveCartItem = (product: Product) => {
    dispatch(removeItem(product));
  };

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.discountPrice && item.discountPrice > 0
        ? item.discountPrice
        : item.price),
    0
  );
  // const totalShipping = cartItems.reduce((sum, item) => sum + item.shipping, 0);
  const total = subtotal;
  const totalSavings = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.discountPrice && item.discountPrice > 0
        ? item.price - item.discountPrice
        : 0),
    0
  );

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-4 md:items-center justify-between mb-8">
          <h1 className="font-heading font-bold text-3xl text-foreground">
            Shopping Cart
          </h1>
          <div className="flex items-center space-x-2 text-foreground/70">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-body">{cartItems.length} items</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length ? (
              cartItems.map((item) => (
                <Card key={item.id}>
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg bg-foreground/10 font-body"
                        />
                        {!item.stock && (
                          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-semibold font-body">
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-heading font-semibold text-foreground line-clamp-2 mb-1">
                              {item.name}
                            </h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="bg-foreground/20 px-2 py-0.5 rounded-sm text-foreground/70 font-body text-xs">
                                {item.condition}
                              </div>
                              <span className="font-body text-sm text-foreground/80">
                                by Seller
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveCartItem(item)}
                            className="text-foreground/70 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <span className="font-heading font-bold text-lg text-primary">
                                $
                                {item.discountPrice && item.discountPrice > 0
                                  ? item.discountPrice
                                  : item.price}
                              </span>

                              {item.discountPrice && item.discountPrice > 0 && (
                                <span className="font-body text-sm text-foreground/70 line-through">
                                  ${item.price}
                                </span>
                              )}
                            </div>
                            {/* {item.shipping > 0 && (
                            <div className="flex items-center space-x-1 text-foreground/70">
                              <Truck className="w-4 h-4" />
                              <span className="font-body text-sm">
                                +${item.shipping} shipping
                              </span>
                            </div>
                          )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="h-[300px] lg:h-full flex flex-col items-center justify-center gap-2">
                <img
                  src={emptyCart}
                  alt="empty cart"
                  className="size-30 md:size-50"
                />
                <h3 className="text-xl font-bold font-heading">
                  Your Cart is empty
                </h3>
                <p className="font-body">Explore products to start shopping</p>
                <Link
                  onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: 0 })
                  }
                  to="/categories"
                >
                  <button className="border-primary mt-6 hover:bg-primary/90 px-2 py-1 rounded-md font-body text-white bg-primary">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}

            {/* Continue Shopping */}
            {cartItems.length > 0 && (
              <div className="pt-4">
                <Link
                  onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: 0 })
                  }
                  to="/categories"
                >
                  <button className="border-primary text-primary hover:bg-primary px-2 py-1 rounded-md font-body hover:text-white bg-transparent">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <h2 className="font-heading font-bold text-xl text-foreground mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-body text-foreground/70">
                      Subtotal ({cartItems.length} items)
                    </span>
                    <span className="font-body font-semibold text-foreground">
                      ${subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-foreground/70">
                      Shipping
                    </span>
                    <span className="font-body font-semibold text-foreground">
                      {/* {totalShipping === 0 ? "FREE" : `$${totalShipping}`} */}
                      FREE
                    </span>
                  </div>
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span className="font-body">You Save</span>
                    <span className="font-body font-semibold">
                      -${totalSavings}
                    </span>
                  </div>
                  <div className="border-t border-foreground/30 pt-3">
                    <div className="flex justify-between">
                      <span className="font-heading font-bold text-lg text-foreground">
                        Total
                      </span>
                      <span className="font-heading font-bold text-lg text-primary">
                        ${total}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className={`w-full ${
                    cartItems.length > 0
                      ? "bg-primary hover:bg-primary/90 cursor-pointer"
                      : "bg-foreground/10 hover:bg-foreground/10 pointer-events-none cursor-not-allowed"
                  } text-white font-body text-lg flex items-center justify-center py-2 px-4 rounded-lg mb-4`}
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>

                <div className="text-center">
                  <button className="text-foreground/70 hover:text-primary p-0 flex items-center text-center mx-auto">
                    <Heart className="w-4 h-4 mr-2" />
                    <span className="font-body text-sm">Save for Later</span>
                  </button>
                </div>
              </div>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-card border border-border">
              <div className="p-6">
                <h3 className="font-body font-semibold text-foreground mb-4">
                  Why Shop with ThriftEase?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        Authenticity Guaranteed
                      </p>
                      <p className="font-body text-xs text-foreground/70">
                        All items verified by our experts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        30-Day Returns
                      </p>
                      <p className="font-body text-xs text-foreground/70">
                        Easy returns and exchanges
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        Fast & Secure Shipping
                      </p>
                      <p className="font-body text-xs text-foreground/70">
                        Free shipping on orders over $75
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContent;
