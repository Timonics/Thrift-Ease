import React from "react";
import { Link } from "react-router";

const BreadCrumbs: React.FC = () => {
  return (
    <section className="py-4 bg-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-foreground/70 font-body">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">Shopping Cart</span>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
