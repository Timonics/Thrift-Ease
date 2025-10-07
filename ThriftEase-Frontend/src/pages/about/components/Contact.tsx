import React from "react";
import Card from "../../../components/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions about our mission or want to partner with us? We'd
            love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                Email Us
              </h3>
              <p className="font-body text-foreground/70 mb-4">
                hello@thriftease.com
              </p>
              <button className="bg-primary hover:bg-primary/90 px-3 py-1 rounded-lg cursor-pointer text-white font-body">
                Send Message
              </button>
            </div>
          </Card>

          <Card className="text-center transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                Call Us
              </h3>
              <p className="font-body text-foreground/70 mb-4">
                +234 (916) 199-2657
              </p>
              <button className="bg-primary hover:bg-primary/90 px-3 py-1 rounded-lg cursor-pointer text-white font-body">
                Schedule Call
              </button>
            </div>
          </Card>

          <Card className="text-center transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                Visit Us
              </h3>
              <p className="font-body text-foreground/70 mb-4">
                Lagos, Nigeria
              </p>
              <button className="bg-primary hover:bg-primary/90 px-3 py-1 rounded-lg cursor-pointer text-white font-body">
                Get Directions
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
