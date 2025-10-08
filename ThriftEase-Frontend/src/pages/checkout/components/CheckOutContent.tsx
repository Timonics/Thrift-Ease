import {
  ArrowLeft,
  Check,
  CreditCard,
  MapPin,
  Package,
  Shield,
  Truck,
  User,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Card from "../../../components/card";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const CheckOutContent: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.discountPrice && item.discountPrice > 0
        ? item.discountPrice
        : item.price),
    0
  );
  // const totalShipping = cartItems.reduce((sum, item) => sum + item.shipping, 0);
  const tax = Math.round(subtotal * 0.08 * 100) / 100; // 8% tax
  const total = subtotal + tax;
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-heading font-bold text-3xl text-foreground">
            Secure Checkout
          </h1>
          <Link to="/my-cart" className="hidden md:block">
            <button className="border-2 border-foreground/30 flex items-center font-body text-foreground/70 px-2 py-1 rounded-md hover:bg-foreground/5 bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card className="p-4">
              <h2 className="font-heading font-bold text-xl text-foreground flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                Contact Information
              </h2>

              <div className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-x-4">
                    <label
                      htmlFor="firstName"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      placeholder="John"
                      className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md focus:border-primary font-heading focus:ring-primary bg-background"
                    />
                  </div>
                  <div className="space-x-4">
                    <label
                      htmlFor="lastName"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      placeholder="Doe"
                      className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                    />
                  </div>
                </div>
                <div className="space-x-4">
                  <label
                    htmlFor="email"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-2 pl-2 border-foreground/30 text-foreground/30 mt-1 w-full rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                  />
                </div>
                <div className="space-x-4">
                  <label
                    htmlFor="phone"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                  />
                </div>
              </div>
            </Card>

            {/* Shipping Address */}
            <Card className="p-4">
              <h2 className="font-heading font-bold text-xl text-foreground flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Shipping Address
              </h2>

              <div className="space-y-4 mt-4">
                <div className="space-x-4">
                  <label
                    htmlFor="address"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Street Address
                  </label>
                  <input
                    id="address"
                    placeholder="123 Main Street"
                    className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                  />
                </div>
                <div className="space-x-4">
                  <label
                    htmlFor="apartment"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    id="apartment"
                    placeholder="Apt 4B"
                    className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md font-heading w-full mt-1 focus:border-primary focus:ring-primary bg-background"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-x-4">
                    <label
                      htmlFor="city"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      placeholder="New York"
                      className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                    />
                  </div>
                  <div className="space-x-4">
                    <label
                      htmlFor="state"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      State
                    </label>
                    <input
                      id="state"
                      placeholder="NY"
                      className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                    />
                  </div>
                  <div className="space-x-4">
                    <label
                      htmlFor="zip"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      placeholder="10001"
                      className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Shipping Method */}
            <Card className="p-4">
              <h2 className="font-heading font-bold text-xl text-foreground flex items-center">
                <Truck className="w-5 h-5 mr-2 text-primary" />
                Shipping Method
              </h2>

              <div className="mt-4">
                <div defaultValue="standard" className="space-y-4">
                  <Card className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    {/* <RadioGroupItem value="standard" id="standard" /> */}
                    <div className="flex-1">
                      <label
                        htmlFor="standard"
                        className="font-body font-semibold text-foreground cursor-pointer"
                      >
                        Standard Shipping (5-7 business days)
                      </label>
                      <p className="font-body text-sm text-muted-foreground">
                        Free shipping on orders over $75
                      </p>
                    </div>
                    <span className="font-body font-bold text-primary">
                      FREE
                    </span>
                  </Card>
                  <Card className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    {/* <RadioGroupItem value="express" id="express" /> */}
                    <div className="flex-1">
                      <label
                        htmlFor="express"
                        className="font-body font-semibold text-foreground cursor-pointer"
                      >
                        Express Shipping (2-3 business days)
                      </label>
                      <p className="font-body text-sm text-muted-foreground">
                        Faster delivery for urgent orders
                      </p>
                    </div>
                    <span className="font-body font-bold text-primary">
                      $15
                    </span>
                  </Card>
                  <Card className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    {/* <RadioGroupItem value="overnight" id="overnight" /> */}
                    <div className="flex-1">
                      <label
                        htmlFor="overnight"
                        className="font-body font-semibold text-foreground cursor-pointer"
                      >
                        Overnight Shipping (1 business day)
                      </label>
                      <p className="font-body text-sm text-muted-foreground">
                        Next day delivery available
                      </p>
                    </div>
                    <span className="font-body font-bold text-primary">
                      $25
                    </span>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Payment Information */}
            <Card className="p-4">
              <h2 className="font-heading font-bold text-xl text-foreground flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-primary" />
                Payment Information
              </h2>

              <div className="space-y-4 mt-4">
                <div defaultValue="card" className="space-y-4">
                  <Card className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                    {/* <RadioGroupItem value="card" id="card" /> */}
                    <label
                      htmlFor="card"
                      className="font-body font-semibold text-foreground cursor-pointer"
                    >
                      Credit/Debit Card
                    </label>
                  </Card>
                  <Card className="ml-8 space-y-4 p-4">
                    <div className="space-x-4">
                      <label
                        htmlFor="cardNumber"
                        className="font-body text-sm font-medium text-foreground"
                      >
                        Card Number
                      </label>
                      <input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="border-2 w-full mt-1 pl-2 border-foreground/30 rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-x-4">
                        <label
                          htmlFor="expiry"
                          className="font-body text-sm font-medium text-foreground"
                        >
                          Expiry Date
                        </label>
                        <input
                          id="expiry"
                          placeholder="MM/YY"
                          className="border-2 pl-2 border-foreground/30 text-foreground/30 w-[100px] rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                        />
                      </div>
                      <div className="space-x-4">
                        <label
                          htmlFor="cvv"
                          className="font-body text-sm font-medium text-foreground"
                        >
                          CVV
                        </label>
                        <input
                          id="cvv"
                          placeholder="123"
                          className="border-2 pl-2 border-foreground/30 text-foreground/30 rounded-md font-heading focus:border-primary focus:ring-primary bg-background"
                        />
                      </div>
                    </div>
                  </Card>
                  <Card className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                    {/* <RadioGroupItem value="paypal" id="paypal" /> */}
                    <label
                      htmlFor="paypal"
                      className="font-body font-semibold text-foreground cursor-pointer"
                    >
                      PayPal
                    </label>
                  </Card>
                  <Card className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                    {/* <RadioGroupItem value="apple" id="apple" /> */}
                    <label
                      htmlFor="apple"
                      className="font-body font-semibold text-foreground cursor-pointer"
                    >
                      Apple Pay
                    </label>
                  </Card>
                </div>

                <div className="flex items-center space-x-2 pt-4">
                  {/* <Checkbox id="billing" /> */}
                  <label
                    htmlFor="billing"
                    className="font-body text-sm text-muted-foreground"
                  >
                    Billing address is the same as shipping address
                  </label>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="p-4">
              <h2 className="font-heading font-bold text-xl text-foreground flex items-center">
                <Package className="w-5 h-5 mr-2 text-primary" />
                Order Summary
              </h2>

              <div className="space-y-4 mt-4">
                {/* Order Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover bg-foreground/10 rounded-lg shadow-sm"
                      />
                      <div className="flex-1">
                        <h4 className="font-outfit font-semibold text-sm text-foreground line-clamp-2">
                          {item.name}
                        </h4>
                        <p className="font-body text-sm font-semibold text-primary">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <Separator /> */}
                <hr className="border-0.5 w-full mx-auto border-foreground/30" />

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">
                      Subtotal
                    </span>
                    <span className="font-body font-semibold text-foreground">
                      ${subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">
                      Shipping
                    </span>
                    <span className="font-body font-semibold text-foreground">
                      {/* {totalShipping === 0 ? "FREE" : `$${totalShipping}`} */}
                      FREE
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Tax</span>
                    <span className="font-body font-semibold text-foreground">
                      ${tax}
                    </span>
                  </div>
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span className="font-body">You Save</span>
                    <span className="font-body font-semibold">
                      -${totalSavings}
                    </span>
                  </div>
                  {/* <Separator /> */}
                  <hr className="border-0.5 w-full mx-auto border-foreground/30" />

                  <div className="flex justify-between">
                    <span className="font-heading font-bold text-lg text-foreground">
                      Total
                    </span>
                    <span className="font-heading font-bold text-lg text-primary">
                      ${total}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white font-outfit text-lg py-2 rounded-lg font-body">
                  {/* <Lock className="w-5 h-5 mr-2" /> */}
                  Complete Order
                </button>

                <div className="text-center text-xs text-muted-foreground">
                  <p className="font-body">
                    By placing your order, you agree to our{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            {/* Security Features */}
            <Card>
              <div className="p-6">
                <h3 className="font-outfit font-semibold text-foreground mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Secure Checkout
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-muted-foreground">
                      SSL encrypted payment
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-muted-foreground">
                      PCI DSS compliant
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-muted-foreground">
                      30-day money back guarantee
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-muted-foreground">
                      24/7 customer support
                    </span>
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

export default CheckOutContent;
