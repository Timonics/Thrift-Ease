import React, { useState } from "react";
import Card from "../../../components/card";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "ThriftEase. helped me find the most amazing vintage jacket! The quality is incredible and the price was unbeatable.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "I love how easy it is to sell my old clothes here. The platform is so user-friendly and I've made great connections.",
      rating: 4,
    },
    {
      name: "Emma Davis",
      text: "Sustainable shopping has never been this fun! I've discovered so many unique pieces that I couldn't find anywhere else.",
      rating: 3,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground/85 font-heading mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-500 font-body">
          Join thousands of happy thrifters who've found their perfect pieces
        </p>
      </div>

      <div className="relative">
        <Card className="border border-foreground shadow-lg shadow-foreground/20">
          <div className="p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current" />
                )
              )}
            </div>
            <blockquote className="text-lg sm:text-xl text-gray-600 font-body mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <cite className="text-gray-900 font-semibold font-heading">
              — {testimonials[currentTestimonial].name}
            </cite>
          </div>
        </Card>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="border border-foreground/55 px-2 py-1 rounded-sm hover:bg-primary/40 hover:text-foreground hover:border-primary bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                  index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="border border-foreground/55 px-2 py-1 rounded-sm hover:bg-primary/40 hover:text-foreground hover:border-primary bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
