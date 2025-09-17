import React from "react";

import { MapPin, Star } from "lucide-react";
import Card from "../../../components/card";
import { shops } from "../../../dummy-data/shops";

const Shops: React.FC = () => {
  return (
    <section>
      <hr className="w-[90%] mx-auto border border-foreground/15"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-8">
          All Shops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-lg hover:border-[#7FC291] transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={shop.image || "/placeholder.svg"}
                  alt={shop.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-2 ${
                      shop.isOpen ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <div
                    className={`font-heading px-2 py-0.5 rounded-lg text-xs ${
                      shop.isOpen
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {shop.isOpen ? "Open" : "Closed"}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {shop.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="font-body text-sm">{shop.location}</span>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="font-heading font-semibold text-foreground">
                    {shop.rating}
                  </span>
                  <span className="font-heading text-sm text-muted-foreground ml-1">
                    ({shop.reviews})
                  </span>
                </div>

                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                  {shop.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {shop.specialties.slice(0, 2).map((specialty, idx) => (
                    <div
                      key={idx}
                      // variant="secondary"
                      className="font-body text-xs px-2 py-0.5 rounded-full bg-foreground/10"
                    >
                      {specialty}
                    </div>
                  ))}
                  {shop.specialties.length > 2 && (
                    <div className="font-body text-xs px-2 py-0.5 rounded-full bg-foreground/10">
                      +{shop.specialties.length - 2} more
                    </div>
                  )}
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white font-body py-1 rounded-lg cursor-pointer ">
                  Visit Shop
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shops;
