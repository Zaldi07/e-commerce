import React from "react";
import Button from "../../UI/Button";

const FormSignUp = (props) => {
  return (
    <div className="w-80">
      <div className="text-3xl font-medium font-interl">Log in to Exclusive</div>
      <div className="text-sm mt-3 mb-7 font-normal font-sans">Enter your details below</div>
      <form action="">
        <div class="flex items-center border-b mb-4 ">
          <input
            class="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins"
            type="text"
            id="email"
            placeholder="Email or Phone Number"
          />
        </div>
        <div class="flex items-center border-b  mb-4 pt-4">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-poppins"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="md:flex  md:justify-between mt-8">
          <div className="md:-ml-8">
            <Button>Log In</Button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            <a href="#" className="text-[#DB4444] hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
