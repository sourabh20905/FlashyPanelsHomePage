import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white`}>
    Get Started
  </button>
);

export default Button;
