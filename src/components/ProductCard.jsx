import React, { useState } from 'react';
import m3 from '../assets/3.jpg';
import m4 from '../assets/4.jpg';
import m5 from '../assets/5.jpg';
import m6 from '../assets/6.jpg';
import m8 from '../assets/8.jpg';
import m10 from '../assets/10.jpg';
import m12 from '../assets/12.jpg';
import m15 from '../assets/15.jpg';
import prnkMain from '../assets/parnik_info.jpg';

const ProductCard = ({ image, size, densities, basePrice, itemsCount, width, height }) => {
  const [quantities, setQuantities] = useState(densities.map(() => 1));
  
  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };
  
  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Product info card */}
      <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col w-full md:w-64">
        <div className="mb-4">
          <img 
            src={prnkMain}
            alt={`Парник (${size} м)`}
            className="w-full mb-4"
          />
        </div>
        <h3 className="text-xl font-bold text-amber-900 mb-4">
          Парник ({size} м)
        </h3>
        <div className="text-sm mb-2">
          <p className="font-semibold">В комплект парника входить</p>
        </div>
        <div className="text-sm space-y-1 flex-grow">
          <div className="flex justify-between">
            <span>Агроволокно</span>
            <span>1 шт</span>
          </div>
          <div className="flex justify-between">
            <span>Дуги ПНД (діаметр 20 мм)</span>
            <span>{size === 3 ? '4' : '5'} шт</span>
          </div>
          <div className="flex justify-between">
            <span>Кілочки (довжина 20 см)</span>
            <span>{itemsCount} шт</span>
          </div>
          <div className="flex justify-between">
            <span>Кліпси (діаметр 20 мм)</span>
            <span>{itemsCount} шт</span>
          </div>
          <div className="flex justify-between">
            <span>Ширина 1,2 м, висота 0,8 м</span>
          </div>
        </div>
      </div>
      
      {/* Product variants */}
      <div className="flex flex-wrap gap-4 flex-grow">
        {densities.map((density, index) => (
          <div key={index} className="bg-white rounded shadow-sm p-4 flex-1 min-w-60">
            <div className="mb-4">
              <img 
                src={image} 
                alt={`Парник ${size}м ${density}г/м²`}
                className="w-full"
              />
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">
              Парник ({size} м)
            </h3>
            <p className="text-red-600 font-medium mb-4">
              Щільність {density}г/м²
            </p>
            
            {/* Quantity selector */}
            <div className="flex items-center justify-center my-4">
              <button 
                className="border border-gray-300 px-2 py-1"
                onClick={() => handleDecrement(index)}
              >
                −
              </button>
              <input 
                type="text" 
                value={quantities[index]} 
                className="w-12 text-center border-t border-b border-gray-300 py-1"
                readOnly
              />
              <button 
                className="border border-gray-300 px-2 py-1"
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            
            {/* Price */}
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-red-600">
                {basePrice + (index * 50)} грн
              </span>
            </div>
            
            {/* Buy button */}
            <button className="w-full bg-green-600 text-white py-2 font-medium hover:bg-green-700 transition">
              КУПИТИ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCatalog = () => {
  const parniky = [
    {
      image: m3, 
      size: 3,
      densities: [42, 50, 60],
      basePrice: 349,
      itemsCount: 9,
      width: 1.2,
      height: 0.8
    },
    {
      image: m4,
      size: 4,
      densities: [42, 50, 60],
      basePrice: 399,
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m5,
      size: 5,
      densities: [42, 50, 60],
      basePrice: 399,
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m6,
      size: 6,
      densities: [42, 50, 60],
      basePrice: 399,
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m8,
      size: 8,
      densities: [42, 50, 60],
      basePrice: 399,
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m10,
      size: 10,
      densities: [42, 50, 60],
      basePrice: 399,
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m12,
      size: 12,
      densities: [42, 50, 60],
      basePrice: 399,
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m15,
      size: 15,
      densities: [42, 50, 60],
      basePrice: 399,
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    }
  ];
  

  return (
    <div className="container mx-auto px-4 py-8">
      {parniky.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductCatalog;