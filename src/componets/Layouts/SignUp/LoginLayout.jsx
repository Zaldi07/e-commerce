import React from "react";
import image from "../../../asset/sideimage.png";
import FormSignUp from "./FormSignUp";
const LoginLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-40 gap-20">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <FormSignUp></FormSignUp>
      </div>
    </div>
  );
};

export default LoginLayout;
