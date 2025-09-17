import React from "react";

type ButtonProps = {
  name: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

export default Button;
