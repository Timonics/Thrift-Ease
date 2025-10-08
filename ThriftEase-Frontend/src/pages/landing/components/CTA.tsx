import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import type { RootState } from "../../../store/store";

const CTA: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.users.isAuthenticated)

  return (
    <section className="py-20 bg-primary/75">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-2">
          Join the Thrift. Revolution
        </h2>
        <p className="font-body text-lg text-foreground/90 leading-relaxed mb-10">
          Start your sustainable shopping journey today and discover amazing
          thrifted treasures
        </p>
        <Link
          to={isAuthenticated ? "categories" : "auth/register"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-foreground text-primary hover:bg-background font-body font-semibold px-8 py-6 text-lg rounded-xl"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
