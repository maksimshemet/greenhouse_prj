import './App.css'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Success from './pages/Success';
import Call from './pages/Call';
import { trackPageView } from './utils/FacebookPixel';

// Create a tracker component
function PixelTracker() {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView();
  }, [location]);
  
  return null;
}

function App() {

  return (
    <CartProvider>
      <Router>
        <PixelTracker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="/call" element={<Call />} />
          </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
