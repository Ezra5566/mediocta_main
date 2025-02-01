// src/admin-dashboard/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend API
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;

