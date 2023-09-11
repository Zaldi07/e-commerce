import React from "react";

// import Button from "../../UI/Button/Button";
import Image from "./img";

function SignUp() {
  return (
    <div className="mt-32 md:-ml-[99px]">
      <div className="bg-white p-8 ">
        <div className="flex">
          <div className="hidden md:block ">
            <Image />
          </div>

          <div className="my-auto mx-auto  w-72">
            <div className="ml-2 ">
              <h1 className="text-3xl font-medium font-sans">Create an account</h1>
              <p className="text-sm mt-3 mb-7 font-sans ">Enter your details below.</p>
            </div>
            <form>
              <div class="flex items-center border-b mb-4 pt-4">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div class="flex items-center border-b mb-4 pt-4">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  id="email"
                  placeholder="Email or Phone Number"
                />
              </div>
              <div class="flex items-center border-b  mb-4 pt-4">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </form>

            <div className=" mt-8">
              <div className=" ">
                <button
                  className="bg-[#DB4444] w-full text-white font-sans py-3 px-10 rounded   hover:bg-[#f55e5e]
    duration-500"
                >
                  Create Account
                </button>
                <button class="w-full px-10 py-2 mt-3 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition  duration-150">
                  <div className="flex m-auto">
                    <img class="w-6 h-6 " src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span className="pl-3">Login with Google</span>
                  </div>
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4 font-sans">
                Already have account?
                <a href="/login" className="text-gray-400 hover:text-gray-500 underline-offset-8 hover:underline font-sans">
                  <span className="ml-2"> Log in</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
