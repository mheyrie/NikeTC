import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 p-3 text-lg border font-montserrat leading-none bg-coral-red rounded-full text-white border-coral-red">
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
