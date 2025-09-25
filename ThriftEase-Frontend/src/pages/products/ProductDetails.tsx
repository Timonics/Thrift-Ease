import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  MessageCircle,
  Package,
  RotateCcw,
  Shield,
  ShoppingCart,
  Timer,
  Truck,
} from "lucide-react";
import placeholderImg from "../../assets/placeholder.png";
import type { Product } from "../../interfaces/product.interface";
import Card from "../../components/card";
import { BiMoney } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { addItem } from "../../store/slices/cart.slice";

type ProductDetailsType = {
  productDetails: Product;
};

const ProductDetails: React.FC<ProductDetailsType> = ({ productDetails }) => {
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);

  const addedToCart = cartItems.filter((item) => item.id == productDetails.id);

  const [msgOpen, setMsgOpen] = useState(false);

  useEffect(() => {
    if (msgOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [msgOpen]);

  const dispatch: AppDispatch = useDispatch();

  const handleAddToCart = (productSelected: Product) => {
    dispatch(addItem(productSelected));
  };

  return (
    <>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative shadow-lg aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={placeholderImg}
                  alt={productDetails.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-white font-body text-sm px-2 py-1 rounded-md">
                    40% OFF
                  </div>
                </div>
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white text-foreground/50 flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white text-foreground/50 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {productDetails.images?.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary transition-colors"
                  >
                    <img
                      src={placeholderImg ?? image}
                      alt={`${productDetails.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-foreground/20 px-2 py-1 rounded-md text-foreground/50 font-body text-sm">
                    {productDetails.category.name}
                  </div>
                  <div className="bg-primary text-background font-body text-sm px-2 py-1 rounded-md">
                    {productDetails.subCategory.name}
                  </div>
                </div>
                <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                  {productDetails.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {/* <span className="font-roboto text-muted-foreground">
                    ({product.reviews} reviews)
                  </span> */}
                  </div>
                  {/* <div className="flex items-center space-x-1 text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span className="font-roboto">{product.views} views</span>
                </div> */}
                  <div className="flex items-center space-x-1 text-foreground/50">
                    {/* <Clock className="w-4 h-4" /> */}
                    {/* <span className="font-roboto">{productDetails.cre}</span> */}
                  </div>
                </div>
              </div>

              {/* Price and Condition */}
              <div className="bg-foreground/5 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="font-heading font-bold text-4xl text-primary">
                    $
                    {productDetails.discountPrice &&
                    productDetails.discountPrice > 0
                      ? productDetails.discountPrice
                      : productDetails.price}
                  </span>
                  {productDetails.discountPrice &&
                    productDetails.discountPrice > 0 && (
                      <span className="font-body text-xl text-foreground/70 line-through">
                        ${productDetails.price}
                      </span>
                    )}
                  {productDetails.discountPrice &&
                    productDetails.discountPrice > 0 && (
                      <div className="bg-green-900 text-green-300 font-outfit px-2 py-1 rounded-md">
                        Save $
                        {productDetails.price - productDetails.discountPrice}
                      </div>
                    )}
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Package className="w-5 h-5 text-foreground/50" />
                    <span className="font-heading text-foreground">
                      Condition:
                    </span>
                    <div
                      className={`${
                        productDetails.condition == "New"
                          ? "bg-blue-900 text-blue-300"
                          : productDetails.condition == "Like New"
                          ? "bg-purple-900 text-purple-300"
                          : productDetails.condition == "Good"
                          ? "bg-green-900 text-green-300"
                          : productDetails.condition == "Fair"
                          ? "bg-yellow-900 text-yellow-300"
                          : "bg-orange-900 text-orange-300"
                      } px-2 py-1 rounded-md font-body`}
                    >
                      {productDetails.condition}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleAddToCart(productDetails)}
                    className={`w-full ${
                      addedToCart.length
                        ? "pointer-events-none cursor-not-allowed bg-foreground/10"
                        : "bg-primary hover:bg-primary/80 cursor-pointer"
                    } text-white font-body text-lg py-4 rounded-lg flex items-center justify-center`}
                  >
                    {addedToCart.length ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <ShoppingCart className="w-5 h-5 mr-2" />
                    )}
                    {addedToCart.length ? "Added to Cart" : "Add to Cart"}
                  </button>
                  <div className="grid grid-cols-2 gap-3 font-body">
                    <button
                      onClick={() => setMsgOpen(true)}
                      className="border border-primary text-primary hover:bg-primary hover:text-white bg-transparent flex items-center justify-center rounded-md py-2"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message Seller
                    </button>
                    <button className="border border-foreground/10 flex items-center justify-center text-foreground/50 hover:bg-foreground/15 hover:border-0 bg-transparent rounded-md py-2">
                      <Timer className="w-4 h-4 mr-2" />
                      Make Offer
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`fixed left-0 top-[75px] w-full h-full bg-black/70 backdrop-blur-sm bg-opacity-50 transition-all z-40 duration-300 ease-in-out ${
                  msgOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMsgOpen(false)}
              />

              <div
                className={`fixed -bottom-10 left-0 right-0 border-2 border-foreground/40 mx-auto min-h-96 max-w-4xl w-full rounded-t-2xl bg-background/70 backdrop-blur-lg shadow-2xl z-50 transform transition-transform ease-in-out duration-500 py-6 px-4 space-y-20 flex items-center justify-center ${
                  msgOpen ? "translate-y-0" : "translate-y-[100vh]"
                } shadow-2xl font-body text-2xl font-bold`}
              >
                Chats Coming Soon !!!
              </div>

              {/* Seller Info */}
              {/* <Card className="">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={"/placeholder.svg"}
                    alt={productDetails.owner.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-outfit font-semibold text-lg text-foreground">
                        {productDetails.owner.name}
                      </h3>
                      {productDetails.owner && (
                        <div className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 font-roboto text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Verified
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-roboto">
                          4.2
                        </span>
                        {/* <span className="font-roboto">
                          ({product.seller.reviews} reviews)
                        </span> 
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-roboto">
                          Nigeria
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card> */}

              {/* Trust & Safety */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-foreground/5 rounded-lg">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-heading text-sm text-foreground font-semibold">
                    Authenticity
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    Guaranteed
                  </p>
                </div>
                <div className="text-center p-4 bg-foreground/5 rounded-lg">
                  <RotateCcw className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-heading text-sm text-foreground font-semibold">
                    30-Day
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    Returns
                  </p>
                </div>
                <div className="text-center p-4 bg-foreground/5 rounded-lg">
                  <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-heading text-sm text-foreground font-semibold">
                    Fast
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    Shipping
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-4">
            {/* Description */}
            <div className="lg:col-span-2">
              <Card className="bg-card border border-border">
                <div className="p-6">
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                    Description
                  </h2>
                  <div className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
                    {productDetails.description}
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-card border border-border">
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  Payment Options
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "Credit/Debit Card", icon: CreditCard },
                    { name: "Cash on Delivery", icon: BiMoney },
                  ].map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center space-x-2 p-2 bg-muted/50 rounded-lg"
                      >
                        <Icon className="w-6 h-6 text-primary" />
                        <span className="font-body text-sm text-foreground">
                          {option.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
