import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero"; // Import the Hero component
import ProductShowcase from "../components/ProductShowcase/ProductShowcase"; // Import the ProductShowcase component

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        {/* Hero section */}
        <Hero />

        {/* Product showcase */}
        <ProductShowcase />
      </main>
      <Footer />
    </>
  );
};

export default Home;


