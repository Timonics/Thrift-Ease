import React from "react";
import { shops } from "../../../dummy-data/shops";
import Card from "../../../components/card";

import { MapPin, Star, Phone, Globe } from "lucide-react";

const FeaturedShops: React.FC = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-8">
          Featured Shops
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {shops
            .filter((shop) => shop.featured)
            .map((shop, index) => (
              <Card
                key={index}
                className="border rounded-lg shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={shop.image || "/placeholder.svg"}
                      alt={shop.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                            {shop.name}
                          </h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="font-body text-sm">
                              {shop.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${
                              shop.isOpen ? "bg-green-500" : "bg-red-500"
                            }`}
                          ></div>
                          <span className="font-heading text-sm text-muted-foreground">
                            {shop.isOpen ? "Open" : "Closed"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-4">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          <span className="font-heading font-semibold text-foreground">
                            {shop.rating}
                          </span>
                          <span className="font-heading text-sm text-muted-foreground ml-1">
                            ({shop.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <p className="font-body text-sm text-muted-foreground mb-4">
                        {shop.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {shop.specialties.map((specialty, idx) => (
                          <div
                            key={idx}
                            className="font-body text-xs px-2 py-0.5 rounded-full bg-foreground/10"
                          >
                            {specialty}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col gap-4 items-start justify-between">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            <span className="font-body text-sm">
                              {shop.phone}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Globe className="w-4 h-4 mr-1" />
                            <span className="font-heading text-sm">
                              {shop.website}
                            </span>
                          </div>
                        </div>
                        <button className="bg-primary hover:bg-primary/70 text-white font-body px-4 py-1 rounded-lg">
                          Visit Shop
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShops;
