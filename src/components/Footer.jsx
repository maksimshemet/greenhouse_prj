import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Questions and CTA Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-amber-900">ЗАЛИШИЛИСЯ ПИТАННЯ?</h3>
            <p className="text-sm text-gray-600">Задайте їх фахівцю з парників</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition-colors">
            ЗАМОВИТИ ДЗВІНОК
          </button>
        </div>
        
        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6">
          {/* Logo */}
          {/* Logo and tagline */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div>
                <h1 className="text-xl font-semibold text-amber-800">Агропарник</h1>
                <p className="text-xs text-gray-600">Найкращі парники в Україні</p>
              </div>
            </Link>
          </div>
          
          {/* Phone Numbers */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-1 h-5 bg-blue-500 mr-2"></div>
              <Phone size={16} className="text-blue-600 mr-1" />
              <span className="text-sm">044 465-75-25</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-1 h-5 bg-red-500 mr-2"></div>
              <Phone size={16} className="text-red-600 mr-1" />
              <span className="text-sm">095 700-75-25</span>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-5 bg-green-500 mr-2"></div>
              <Phone size={16} className="text-green-600 mr-1" />
              <span className="text-sm">067 755-75-25</span>
            </div>
          </div>
          
          {/* Addresses */}
          <div className="text-sm text-right">
            <p className="mb-1">Харків, вул. Льва Ландау, 171</p>
            <p>Київ, Вишневе, вул. Лесі України, 62</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;