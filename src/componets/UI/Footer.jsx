import React from "react";
import qrimage from "../../asset/Qrcode.png";
import iosimage from "../../asset/appstore.png";
import googleplay from "../../asset/GooglePlay.png";
const Footer = () => {
  return (
    <div className="w-full h-full bg-black mt-10  pr-[8%] pl-[8%] ">
      <div className="grid grid-cols-2 lg:grid-cols-5 justify-between w-full pt-10 lg:pt-20 lg:pb-10 gap-2">
        <div className="1/5  bg-black text-white flex flex-col gap-2">
          <h1 className="font-inter text-lg font-medium">Exclusive</h1>
          <h1 className="font-[Poppins]">Subscribe</h1>
          <h1 className="text-xs">Get 10% off your first order</h1>
          <div className="relative flex  pb-3 lg:pb-0">
            <span className=" absolute top-0 md:right-32 right-8 ml-4 mt-1  bottom-10 text-lg ">
              <ion-icon name="send-outline"></ion-icon>
            </span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Send Email"
              className="  bg-black  text-white border-2 form-input h-8 w-[90%] lg:w-[60%] px-8 lg:px-4 rounded-sm"
            ></input>
          </div>
        </div>
        <div className="1/5 bg-black text-white lg:pl-3  flex flex-col gap-3">
          <h1 className="font-inter text-lg font-medium ">Support</h1>
          <h1 className="text-xs font-[Poppins] ">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h1>
          <h1 className="text-xs font-[Poppins] ">exclusive@gmail.com</h1>
          <h1 className="text-xs font-[Poppins] ">+88015-88888-9999</h1>
        </div>
        <div className="1/5 bg-black text-white lg:pl-3  flex flex-col gap-3 font-normal">
          <h1 className="font-inter text-lg font-medium ">Account</h1>
          <h1 className="text-xs font-[Poppins] ">My Account</h1>
          <h1 className="text-xs font-[Poppins] ">Login/register</h1>
          <h1 className="text-xs font-[Poppins] ">Cart</h1>
          <h1 className="text-xs font-[Poppins] ">WishList</h1>
          <h1 className="text-xs font-[Poppins] ">Shop</h1>
        </div>
        <div className="1/5 bg-black text-white lg:pl-3  flex flex-col gap-3 font-normal">
          <h1 className="font-inter text-lg font-medium">Quick Link</h1>
          <h1 className="text-xs font-[Poppins] ">Privacy Policy</h1>
          <h1 className="text-xs font-[Poppins] ">Terms Of Use</h1>
          <h1 className="text-xs font-[Poppins] ">FAQ</h1>
        </div>
        <div className=" 1/5 bg-black text-white lg:pl-3  flex flex-col   gap-3 font-normal pt-5 lg:pt-0">
          <h1 className="font-inter text-lg font-medium">Download App</h1>
          <div>
            <h1 className="text-xs font-[Poppins]  lg:pt-2 opacity-70">Save $3 with App New User Only</h1>
            <div className="flex gap-2 lg:pt-1">
              <div>
                <img src={qrimage} alt="" />
              </div>
              <div>
                <img src={googleplay} alt="" />
                <img src={iosimage} alt="" />
              </div>
            </div>
          </div>
          <div className="text-xl flex gap-5 lg:pt-2 pb-5">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
