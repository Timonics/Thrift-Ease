import { Heart, Star } from "lucide-react";
import React from "react";
import Card from "../../../components/card";

const ProductListing: React.FC = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground/90 mb-2">
              Featured Products
            </h2>
            <p className="font-body text-foreground/40">
              Handpicked thrifted treasures just for you
            </p>
          </div>
          <button className="border-primary text-primary hover:bg-primary hover:text-foreground bg-transparent px-2 py-0.5 rounded-md text-sm">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              name: "Vintage Denim Jacket",
              price: "$35",
              originalPrice: "$89",
              image: "/vintage-denim-jacket.png",
              rating: 4.8,
              likes: 24,
            },
            {
              name: "Retro Sunglasses",
              price: "$18",
              originalPrice: "$45",
              image: "/retro-sunglasses.png",
              rating: 4.6,
              likes: 18,
            },
            {
              name: "Classic Vinyl Records",
              price: "$25",
              originalPrice: "$60",
              image: "/vintage-vinyl-records.png",
              rating: 4.9,
              likes: 32,
            },
            {
              name: "Designer Scarf",
              price: "$28",
              originalPrice: "$75",
              image: "/designer-silk-scarf.png",
              rating: 4.7,
              likes: 15,
            },
            {
              name: "Vintage Camera",
              price: "$95",
              originalPrice: "$200",
              image: "/placeholder-q9ax6.png",
              rating: 4.8,
              likes: 41,
            },
            {
              name: "Leather Boots",
              price: "$55",
              originalPrice: "$120",
              image: "/placeholder-vn9e9.png",
              rating: 4.5,
              likes: 28,
            },
            {
              name: "Antique Jewelry Box",
              price: "$42",
              originalPrice: "$95",
              image: "/placeholder-8iubh.png",
              rating: 4.9,
              likes: 19,
            },
            {
              name: "Retro T-Shirt",
              price: "$15",
              originalPrice: "$35",
              image: "/vintage-band-tshirt.png",
              rating: 4.4,
              likes: 22,
            },
          ].map((product, index) => (
            <Card
              key={index}
              className="bg-foreground/5 border border-[#D1D1D1] rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <div className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button className="absolute top-2 right-2 bg-foreground/20 rounded-full hover:bg-foreground hover:text-primary p-2">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="font-body font-semibold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-secondary text-sm text-foreground/60 ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="font-secondary text-sm text-foreground/50 ml-2">
                    ({product.likes} likes)
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-heading font-bold text-primary text-lg">
                      {product.price}
                    </p>
                    <p className="font-secondary text-sm text-foreground/50 line-through">
                      {product.originalPrice}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-md bg-primary hover:bg-primary/90 text-white font-body">
                    Buy Now
                  </button>
                  <button className="flex-1 border-primary text-primary hover:bg-primary hover:text-white rounded-md font-body bg-transparent">
                    Place Bid
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
