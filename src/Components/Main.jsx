import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Food from "./Food";
import HeadlineCards from "./HeadlineCards";
import Category from "./Category";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
};

export default Main;
