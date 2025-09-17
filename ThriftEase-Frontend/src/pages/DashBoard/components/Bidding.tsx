import React from "react";
import Card from "../../../components/card";

const Bidding: React.FC = () => {
  return (
    <section className="py-8 lg:py-12 bg-foreground/5 relative">
      <div className="absolute top-0 left-0 h-full w-full bg-black/70 backdrop-blur-xs z-50 flex items-center justify-center text-4xl font-bold font-body text-white">
        Coming soon!!!
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground/90 mb-2">
              Active Bidding
            </h2>
            <p className="font-body text-foreground/40">
              Don't miss out on these amazing deals
            </p>
          </div>
          <button
            className="border-primary text-primary hover:bg-primary hover:text-background not-hover:underline text-sm font-heading px-2 py-0.5 rounded-md bg-transparent"
          >
            View All Bids
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              name: "Vintage Leather Jacket",
              price: "$45",
              bidPrice: "$38",
              image: "/vintage-leather-jacket.png",
              timeLeft: "2h 15m",
            },
            {
              name: "Designer Handbag",
              price: "$120",
              bidPrice: "$95",
              image: "/luxury-quilted-handbag.png",
              timeLeft: "5h 42m",
            },
            {
              name: "Retro Gaming Console",
              price: "$80",
              bidPrice: "$65",
              image: "/retro-gaming-console.png",
              timeLeft: "1h 33m",
            },
            {
              name: "Antique Watch",
              price: "$200",
              bidPrice: "$150",
              image: "/antique-pocket-watch.png",
              timeLeft: "3h 28m",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-background border border-[#D1D1D1] rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="p-4">
                <div className="relative mb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-black font-body px-2 py-0.5 rounded-md text-xs">
                    {item.timeLeft} left
                  </div>
                </div>
                <h3 className="font-body font-semibold text-foreground/90 mb-2 line-clamp-2">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-body text-sm text-gray-500 line-through">
                      {item.price}
                    </p>
                    <p className="font-heading font-bold text-primary">
                      Current: {item.bidPrice}
                    </p>
                  </div>
                  <button
                    className="bg-primary px-2 py-0.5 rounded-md hover:bg-primary/90 text-black font-body"
                  >
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

export default Bidding;
