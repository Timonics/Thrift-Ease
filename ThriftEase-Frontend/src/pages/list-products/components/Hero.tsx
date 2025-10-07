import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="py-8 bg-[#7FC291]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-3">
            List Your Product
          </h1>
          <p className="font-body text-foreground/50 text-lg">
            Share your thrifted treasures with our community and earn money
            sustainably
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
