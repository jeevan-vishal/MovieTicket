// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import Signup from './pages/Signup'; // ✅ match file: Signup.jsx
import MoviePage from './pages/movie';
import SeatSelectionPage from './pages/seat';
import PaymentPage from './pages/payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Signup" element={<Signup />} />  {/* ✅ FIX */}
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/seats" element={<SeatSelectionPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
