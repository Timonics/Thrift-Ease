import React from "react";
import { Leaf, DollarSign, Sparkles } from "lucide-react";
import Card from "../../../components/card";

const Features: React.FC = () => {
  return (
    <section className="bg-gray-900/15 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground/85 mb-4">
            Why Choose ThriftEase. ?
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
            Experience the future of sustainable shopping with our innovative
            platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-primary/75" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground/85 mb-4">
                Sustainable Fashion
              </h3>
              <p className="font-secondary text-gray-500 leading-relaxed">
                Reduce your environmental impact while looking stylish. Every
                purchase helps create a more sustainable future.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary/75" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground/85 mb-4">
                Affordable Prices
              </h3>
              <p className="font-secondary text-gray-500 leading-relaxed">
                Get premium quality items at fraction of retail prices. Fashion
                doesn't have to break the bank.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary/75" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground/85 mb-4">
                Unique Finds
              </h3>
              <p className="font-secondary text-gray-500 leading-relaxed">
                Discover one-of-a-kind pieces that express your individual
                needs. Stand out from the crowd.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
