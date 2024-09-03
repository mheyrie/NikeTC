import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
    className={`flex justify-center items-center gap-2 p-3 text-lg border font-montserrat leading-none 
      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : "bg-coral-red text-white border-coral-red"}
    rounded-full`}
  >
    {label}
    {iconURL && (
      <img
        src={iconURL}
        alt="Arrow Right Icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    )}
  </button>
  
  );
};

export default Button;
