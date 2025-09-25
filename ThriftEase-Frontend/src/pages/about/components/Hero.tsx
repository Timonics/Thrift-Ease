import React from "react";
import { ShoppingCart, Users, Globe, Recycle } from "lucide-react";
import Card from "../../../components/card";

const Hero: React.FC = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "100K+", label: "Items Sold", icon: ShoppingCart },
    { number: "500+", label: "Partner Shops", icon: Globe },
    { number: "2M+", label: "CO2 Saved (kg)", icon: Recycle },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6 text-balance lg:leading-18">
            Revolutionizing Thrift Shopping for a{" "}
            <span className="text-primary">Sustainable Future</span>
          </h1>
          <p className="font-body text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed text-pretty">
            We're on a mission to make sustainable shopping accessible,
            enjoyable, and impactful. Join us in creating a circular economy
            where every purchase makes a difference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center transition-shadow"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-3xl text-foreground mb-2">
                  {stat.number}
                </h3>
                <p className="font-body text-foreground/70">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
