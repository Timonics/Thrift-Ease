import React, { type ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={clsx(
        "bg-background rounded-xl border-2 border-foreground/25 shadow-lg hover:shadow-xl transition-shadow duration-300",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
