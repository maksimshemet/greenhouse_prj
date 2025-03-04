import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo and tagline */}
        <div className="flex items-center">
          <div className="flex items-center">
            <div>
              <h1 className="text-xl font-semibold text-amber-800">Агропарник</h1>
              <p className="text-xs text-gray-600">Найкращі парники в Україні</p>
            </div>
          </div>
        </div>
        
        {/* Phone numbers and language selector */}
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
          
          {/* Language selector */}
          <div className="flex items-center space-x-1">
            <button className="text-sm font-medium text-green-700 hover:underline">UKR</button>
            <span className="text-gray-400">|</span>
            <button className="text-sm font-medium text-gray-500 hover:underline">RUS</button>
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
      </div>
    </header>
  );
};

export default Header;