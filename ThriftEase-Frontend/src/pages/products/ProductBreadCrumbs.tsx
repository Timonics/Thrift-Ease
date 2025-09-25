import React from "react";
import { Link } from "react-router";
import type { Product } from "../../interfaces/product.interface";

type ProductDetailsType = {
  product: Product;
};

const ProductBreadCrumbs: React.FC<ProductDetailsType> = ({ product }) => {
  return (
    <section className="py-4 bg-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-foreground/50 font-body overflow-hidden">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/categories"
            className="hover:text-primary transition-colors"
          >
            Categories
          </Link>
          <span>/</span>
          <Link
            to={`/categories/${product.categoryId}`}
            className="hover:text-primary transition-colors text-nowrap" 
          >
            {product.category.name}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium text-nowrap">{product.name}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductBreadCrumbs;
