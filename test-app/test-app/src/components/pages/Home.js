import "../../App.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import React from "react";
import Cards from "../Cards";
import TwoByTwo from "../TwoByTwo"; //?? what does this error mean

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <TwoByTwo />
    </>
  );
}

export default Home;
