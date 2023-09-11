import React, { Fragment } from "react";
import Nav from "../UI/Nav";
import Hero from "../Layouts/Home/Hero";
import FlashSale from "../Layouts/Home/FlashSaleV2";
import Category from "../Layouts/Home/Category";
import Bestsell from "../Layouts/Home/BestSellV2";
import Footer from "../UI/Footer";

const Home = () => {
  return (
    <Fragment>
      <div className="w-full h-full   pl-[8%] pr-[8%]">
        <Nav></Nav>
        <Hero></Hero>
        <FlashSale></FlashSale>
        <Category></Category>
        <Bestsell></Bestsell>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
