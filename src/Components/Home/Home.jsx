import React from "react";
import Hero from "./Hero";
import Showcase from "./Showcase";
import FirebaseShowcase from "./FirebaseShowcase";
import ShareShowcase from "./ShareShowcase";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="section">
      <Hero />
      <Showcase />
      <ShareShowcase />
      <FirebaseShowcase />
      <Footer />
    </div>
  );
};

export default Home;
