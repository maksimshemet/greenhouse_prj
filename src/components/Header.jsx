import React from 'react';
import { Phone, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <>
      {/* This empty div maintains the space where the fixed header would have been */}
      <div className="w-full h-12"></div>
      
      <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo and tagline */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div>
                <h1 className="text-xl font-semibold text-amber-800">Агропарник</h1>
                <p className="text-xs text-gray-600">Найкращі парники в Україні</p>
              </div>
            </Link>
          </div>
          
          {/* Phone numbers, language selector, and cart */}
          <div className="flex items-center space-x-6">
            {/* Phone numbers */}
            <div className="hidden md:flex flex-col">
              <div className="flex items-center">
                <div className="w-1 h-5 bg-green-500 mr-2"></div>
                <Phone size={16} className="text-green-600 mr-1" />
                <span className="text-sm text-stone-950">044 465-75-25</span>
              </div>
              <div className="flex items-center mt-1">
                <div className="w-1 h-5 bg-red-500 mr-2"></div>
                <Phone size={16} className="text-red-600 mr-1" />
                <span className="text-sm text-stone-950">095 700-75-25</span>
              </div>
              <div className="flex items-center mt-1">
                <div className="w-1 h-5 bg-green-500 mr-2"></div>
                <Phone size={16} className="text-green-600 mr-1" />
                <span className="text-sm text-stone-950">067 755-75-25</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col space-y-1">
              <button className="bg-yellow-300 text-gray-800 px-4 py-1 text-sm font-medium hover:bg-yellow-400 transition">
                ЗАМОВИТИ ДЗВІНОК
              </button>
              <button className="bg-green-600 text-white px-4 py-1 text-sm font-medium hover:bg-green-700 transition">
                Оптові ціни
              </button>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative flex items-center">
            <ShoppingCart size={24} className="text-green-600 hover:text-green-700 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;