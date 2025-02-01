import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products") // Replace with backend URL
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Shop;

