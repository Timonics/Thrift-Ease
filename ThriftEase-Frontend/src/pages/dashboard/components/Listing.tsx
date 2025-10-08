import React from "react";
import { Link } from "react-router";

const Listing: React.FC = () => {
  return (
    <section className="py-8 lg:py-12 bg-foreground">
      <div className="max-w-7xl flex flex-col gap-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-background/90 mb-2">
            Become a seller
          </h2>
          <p className="font-body text-background/40">
            Sell your thrifted items by listing your product
          </p>
        </div>
        <Link
          onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
          to={"/listings/list-my-product"}
          className="bg-background w-fit mx-auto text-foreground font-body font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition"
        >
          List Your Product
        </Link>
      </div>
    </section>
  );
};

export default Listing;
