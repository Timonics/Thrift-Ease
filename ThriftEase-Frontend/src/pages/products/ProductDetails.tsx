import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  // MapPin,
  MessageCircle,
  Package,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Timer,
  Truck,
} from "lucide-react";
import placeholderImg from "../../assets/placeholder.png";
import type { Product } from "../../interfaces/product.interface";

type ProductDetailsType = {
  productDetails: Product;
};

const ProductDetails: React.FC<ProductDetailsType> = ({ productDetails }) => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {/* <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  className={`w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white ${
                    product.isLiked ? "text-red-500" : "text-muted-foreground"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      product.isLiked ? "fill-current" : ""
                    }`}
                  />
                </button>
                <button
                  className="w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white text-muted-foreground"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div> */}
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
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-body text-lg font-semibold">4.2</span>
                  {/* <span className="font-roboto text-muted-foreground">
                    ({product.reviews} reviews)
                  </span> */}
                </div>
                {/* <div className="flex items-center space-x-1 text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span className="font-roboto">{product.views} views</span>
                </div> */}
                <div className="flex items-center space-x-1 text-foreground/50">
                  <Clock className="w-4 h-4" />
                  {/* <span className="font-roboto">{productDetails.cre}</span> */}
                </div>
              </div>
            </div>

            {/* Price and Condition */}
            <div className="bg-foreground/5 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-heading font-bold text-4xl text-primary">
                  ${productDetails.price}
                </span>
                {/* <span className="font-roboto text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span> */}
                <div className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 font-roboto px-2 py-1 rounded-md">
                  Save $100
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-foreground/50" />
                  <span className="font-heading text-foreground">
                    Condition:
                  </span>
                  <div className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-md font-body">
                    {productDetails.condition}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-body text-lg py-4 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <div className="grid grid-cols-2 gap-3 font-body">
                  <button className="border border-primary text-primary hover:bg-primary hover:text-white bg-transparent flex items-center justify-center rounded-md py-2">
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
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-roboto text-muted-foreground">
                          Joined:
                        </span>
                        <span className="font-roboto text-foreground ml-2">
                          {product.seller.joinedDate}
                        </span>
                      </div>
                      <div>
                        <span className="font-roboto text-muted-foreground">
                          Response:
                        </span>
                        <span className="font-roboto text-foreground ml-2">
                          {product.seller.responseTime}
                        </span>
                      </div>
                      <div>
                        <span className="font-roboto text-muted-foreground">
                          Total Sales:
                        </span>
                        <span className="font-roboto text-foreground ml-2">
                          {product.seller.totalSales}
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
      </div>
    </section>
  );
};

export default ProductDetails;
