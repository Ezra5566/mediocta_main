// components/ProductShowcase/ProductShowcase.js
import React, { useState } from 'react';
import './ProductShowcase.css';
import * as Lucide from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types'; // Import PropTypes

const ProductShowcase = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  if (!products || products.length === 0) {
    return <div className="no-products">No products available.</div>;
  }

  return (
    <div className="product-showcase">
      {products.map((product) => (
        <motion.div
          className="product-card"
          key={product.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="product-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => (e.target.src = 'placeholder.jpg')} // Make sure placeholder.jpg exists
            />
            {product.isNew && <span className="product-badge">New</span>}
          </div>
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-info">
              <p className="product-price">{product.price}</p>
              <AnimatePresence>
                {hoveredProduct === product.id && (
                  <motion.div
                    className="quick-actions"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="product-action">
                      <Lucide.ShoppingCart size={16} /> Add to Cart
                    </button>
                    <button className="product-action">
                      <Lucide.Eye size={16} /> View Details
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="product-icons">
              <Lucide.Heart className="icon" size={20} />
              <Lucide.Share2 className="icon" size={20} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

ProductShowcase.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string,
      isNew: PropTypes.bool,
    })
  ).isRequired,
};

export default ProductShowcase;
