import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="font-normal text-[0.75rem] text-white bg-orange-400 py-2 px-2 rounded-2xl hover:opacity-80">
      {children}
    </button>
  );
};

export default Button;