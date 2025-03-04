import React from 'react';
import { ShoppingCart } from 'lucide-react';
import bgImg from '../assets/greenhouse-bg.jpg';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Background image with vegetables */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgImg})` 
        }}
      >
      </div>
      
      {/* Wooden board with promotional text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-amber-100 bg-opacity-90 rounded-2xl p-6 max-w-xl text-center shadow-lg" 
             style={{ border: '2px solid #8B4513' }}>
          <h1 className="text-4xl font-bold text-amber-900 mb-2">
            ПАРНИК "ПРОЛІСОК"
          </h1>
          <p className="text-xl text-amber-800 mb-6">
            від українського виробника
          </p>
          
          <div className="text-5xl font-bold text-amber-800 mb-4">
            1+1=3
          </div>
          
          <p className="text-lg font-medium text-amber-800 mb-1">
            У комплекті вигідніше!
          </p>
          <p className="text-lg font-medium text-amber-800">
            Купуй 2 парники, а 3-й у подарунок!
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default HeroBanner;