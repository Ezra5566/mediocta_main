// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin-dashboard/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

