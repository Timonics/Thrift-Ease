import React from "react";
import { popularCategories } from "../../../dummy-data/categories";
import Card from "../../../components/card";

const PopularCategories: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-2">
            Most Popular This Week
          </h2>
          <p className="font-body text-muted-foreground">
            Categories with the highest activity and best deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularCategories.map((category, index) => {
            const Icon = category.icon
            return (
            <Card
              key={index}
              className="shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-heading font-bold text-xl mb-1">
                    {category.name}
                  </h3>
                  <p className="font-body text-sm opacity-90">
                    {category.itemCount.toLocaleString()} items
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-background font-medium font-body px-2 py-0.5 rounded-md text-sm">
                  {category.weeklyGrowth} this week
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 ${category.color} ${category.iconColor} rounded-full flex items-center justify-center mr-3`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground">
                        Trending Now
                      </p>
                      <p className="font-roboto text-sm text-muted-foreground">
                        High demand category
                      </p>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-background font-medium font-body px-2 py-1 rounded-md">
                    Explore
                  </button>
                </div>
              </div>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
