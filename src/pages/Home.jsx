import React from "react";
import Hero from "../components/Hero";
import SelectKit from "../components/SelectKit";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Client from "../components/Client";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <SelectKit />
      <Banner />
      <ChooseUs />
      <Client />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
