import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Placeholder for product images (replace with actual imports)
import clothingImage1 from '../../images/mediocta.png';
import clothingImage2 from '../../images/mediocta.png';
import hatImage1 from '../../images/mediocta.png';
import hatImage2 from '../../images/mediocta.png';

// Mock product data (in a real app, this would come from a backend)
const initialProducts = [
  {
    id: 'c1',
    name: 'Urban Comfort Tee',
    category: 'clothing',
    price: 39.99,
    image: clothingImage1,
    description: 'Sleek, comfortable t-shirt perfect for everyday wear'
  },
  {
    id: 'c2',
    name: 'Slim Fit Denim Jacket',
    category: 'clothing',
    price: 129.99,
    image: clothingImage2,
    description: 'Classic denim jacket with modern cut'
  },
  {
    id: 'h1',
    name: 'Classic Baseball Cap',
    category: 'hats',
    price: 24.99,
    image: hatImage1,
    description: 'Adjustable cap with Mediocta logo'
  },
  {
    id: 'h2',
    name: 'Vintage Wool Snapback',
    category: 'hats',
    price: 49.99,
    image: hatImage2,
    description: 'Premium wool snapback for all seasons'
  }
];

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('clothing');

  useEffect(() => {
    // Simulate fetching products (in a real app, this would be an API call)
    setProducts(initialProducts);
  }, []);

  // Filter products by category
  const filteredProducts = products.filter(
    product => product.category === selectedCategory
  );

  return (
    <div className="mediocta-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Elevate Your Style</h1>
            <h2>Mediocta: Where Comfort Meets Fashion</h2>
            <p>Discover our latest collection of premium clothing and signature hats.</p>
            <div className="hero-cta-buttons">
              <button
                className={`hero-btn ${selectedCategory === 'clothing' ? 'hero-btn-primary' : 'hero-btn-secondary'}`}
                onClick={() => setSelectedCategory('clothing')}
              >
                Clothing
              </button>
              <button
                className={`hero-btn ${selectedCategory === 'hats' ? 'hero-btn-primary' : 'hero-btn-secondary'}`}
                onClick={() => setSelectedCategory('hats')}
              >
                Hats
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price-action">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
