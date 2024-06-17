import "../../App.css";
import Navbar from "../Navbar";
import Hero from "../Hero";
import React from "react";
import Cards from "../Cards";
import TwoByTwo from "../TwoByTwo"; //?? what does this error mean
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <TwoByTwo />
      <Footer />
    </>
  );
}

export default Home;
