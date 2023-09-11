import React from "react";

const ButtonCart = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${props.warna} border-2  ${props.text}  font-['Poppins'] py-3 px-10  md:py-4 md:px-8 rounded  hover:text-white hover:bg-[#DB4444]  duration-500`}
    >
      {props.children}
    </button>
  );
};

export default ButtonCart;
