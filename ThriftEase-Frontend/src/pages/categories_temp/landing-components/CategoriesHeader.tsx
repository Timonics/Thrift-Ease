// import { ArrowUpDown, ChevronDown, Filter, Grid3X3, List } from "lucide-react";
import React from "react";
import categoryImg from "../../../assets/Vintage-Treasures and-Classic-Finds.png"

const CategoriesHeader: React.FC = () => {
  return (
    <section className="relaive bg-foreground/45 relative">
      <img src={categoryImg} className="absolute top-0 w-full h-full pointer-events-none object-cover mix-blend-overlay"/>
      <div className="py-8 lg:py-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-4">
            Browse All Categories
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Discover amazing thrifted treasures across all our categories. From
            vintage fashion to retro electronics, find your perfect sustainable
            purchase.
          </p>
        </div>

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

export default CategoriesHeader;
