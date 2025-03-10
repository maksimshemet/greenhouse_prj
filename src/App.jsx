import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Success from './pages/Success';
import Call from './pages/Call';

function App() {

  return (
    <CartProvider>
      <Router>
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
