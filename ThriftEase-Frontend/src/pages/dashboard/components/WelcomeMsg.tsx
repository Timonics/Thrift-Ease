import React from "react";
import type { User } from "../../../interfaces/user.interface";

type Props = {
  user: User;
};

const WelcomeMsg: React.FC<Props> = ({ user }) => {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-body text-4xl md:text-5xl font-bold">
        Welcome back, {user.name}
      </div>
    </section>
  );
};

export default WelcomeMsg;
