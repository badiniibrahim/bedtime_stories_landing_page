"use client";

import About2 from "@/components/shared/About2";
import Clients from "@/components/shared/Clients";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto relative bg-[#010104]">
      <Header />
      <Hero />
      <About2 />
      <Clients />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
