import React from "react";
// import { quickCategories } from "../../../dummy-data/categories";
// import { Filter, Grid3X3, List, ArrowUpDown, ChevronDown } from "lucide-react";

import shopsImg from "../../../assets/Vintage-Finds-on-Cobblestone-Street.png"

const ShopsHeader: React.FC = () => {
  return (
    <section className="relaive bg-foreground/50 relative min-h-[400px] flex items-center justify-center">
      <img
        src={shopsImg}
        className="absolute top-0 w-full h-full object-bottom pointer-events-none object-cover mix-blend-overlay"
      />
      <div className="py-8 lg:py-12 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary/80 mb-4">
            Explore Thrift Shops
          </h1>
          <p className="font-body text-lg text-white/75 max-w-2xl mx-auto">
            Discover unique thrift shops in your area. Each shop specializes in
            different categories, offering curated collections of sustainable
            treasures.
          </p>
        </div>

        {/* <div className="mb-8">
          <h3 className="font-heading font-semibold text-lg text-white mb-4 text-center">
            Browse by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {quickCategories.map((category, index) => (
              <button
                key={index}
                className="border-primary font-body text-primary hover:bg-primary hover:text-white bg-transparent flex items-center border px-2 py-1 rounded-lg"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div> */}

        {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="border-[#7FC291] text-[#7FC291] hover:bg-[#7FC291] hover:text-white bg-transparent flex items-center border px-2 py-1 rounded-lg">
              <Filter className="w-4 h-4 mr-2" />
              Filter by Location
            </button>
            <button className="border-border text-muted-foreground hover:bg-muted bg-transparent flex items-center border px-2 py-1 rounded-lg">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort by Rating
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:bg-[#7FC291]/10 hover:text-[#7FC291]">
              <Grid3X3 className="w-6 h-6" />
            </button>
            <button className="hover:bg-[#7FC291]/10 hover:text-[#7FC291]">
              <List className="w-6 h-6" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ShopsHeader;
