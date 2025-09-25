import React from "react";
import { Heart, Recycle, Award, Target } from "lucide-react";
import Card from "../../../components/card";

const Values: React.FC = () => {
  const values = [
    {
      icon: Recycle,
      title: "Sustainability First",
      description:
        "Every purchase helps reduce waste and promotes circular economy principles.",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description:
        "Building connections between conscious shoppers and local thrift stores.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Curated selection of high-quality pre-loved items with detailed condition reports.",
    },
    {
      icon: Target,
      title: "Accessible Pricing",
      description:
        "Making sustainable fashion and goods affordable for everyone.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Our Values
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            The principles that guide everything we do at ThriftEase
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:border-primary">
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
