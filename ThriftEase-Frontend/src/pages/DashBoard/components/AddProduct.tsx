import React from "react";

const AddProduct: React.FC = () => {
  return (
    <section className="py-8 lg:py-12 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-background/90 mb-2">
            Become an owner
          </h2>
          <p className="font-body text-background/40">
            Sell your thrifted items by listing your product
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
