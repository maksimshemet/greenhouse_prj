import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import m2 from '../assets/2.png';
import m3 from '../assets/3.jpg';
import m4 from '../assets/4.jpg';
import m5 from '../assets/5.jpg';
import m6 from '../assets/6.jpg';
import m8 from '../assets/8.jpg';
import m10 from '../assets/10.jpg';
import m12 from '../assets/12.jpg';
import m15 from '../assets/15.jpg';
import prnkMain from '../assets/parnik_info.jpg';
import dripIrMain from '../assets/drip-irrigation-1.jpg';
import dripIr1 from '../assets/drip-irrigation-2.jpg';
import dripIr2 from '../assets/drip-irrigation-3.jpg';
import dripIr3 from '../assets/drip-irrigation-4.jpg';

const ProductCard = ({ image, size, densities, prices, itemsCount, width, height }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(densities.map(() => 1));
  const [addedToCart, setAddedToCart] = useState(densities.map(() => false));
  
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

  const handleAddToCart = (index, density) => {
    const product = {
      id: `parnik-${size}m-${density}g`,
      name: `Парник (${size} м) - ${density}г/м²`,
      price: prices[index],
      image: image,
      size: size,
      density: density,
      width: width,
      height: height
    };

    addToCart(product, quantities[index]);
    
    const newAddedToCart = [...addedToCart];
    newAddedToCart[index] = true;
    setAddedToCart(newAddedToCart);
    
    setTimeout(() => {
      setAddedToCart(newAddedToCart.map(() => false));
      navigate('/cart');
    }, 500);
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Інформаційна картка продукту */}
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
            <span>{size === 2 ? '3' : size === 3 ? '4' : '5'} шт</span>
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
      
      {/* Варіанти продукту */}
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
            
            {/* Вибір кількості */}
            <div className="flex items-center justify-center my-4">
              <button 
                className="border border-gray-300 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-l"
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
                className="border border-gray-300 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-r"
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            
            {/* Ціна */}
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-red-600">
                {prices[index]} грн
              </span>
            </div>
            
            {/* При замовленні від 2шт */}
            <div className="text-center mb-4">
              <span className="text-sm font-semibold text-green-600">
                При замовленні від 2шт: {size === 2 ? (density === 42 ? '226грн/шт' : density === 50 ? '246грн/шт' : '273грн/шт') : size === 3 ? (density === 42 ? '279грн/шт' : density === 50 ? '333грн/шт' : '392грн/шт') : size === 4 ? (density === 42 ? '359грн/шт' : density === 50 ? '399грн/шт' : '459грн/шт') : size === 5 ? (density === 42 ? '399грн/шт' : density === 50 ? '459грн/шт' : '536грн/шт') : size === 6 ? (density === 42 ? '439грн/шт' : density === 50 ? '526грн/шт' : '592грн/шт') : size === 8 ? (density === 42 ? '546грн/шт' : density === 50 ? '619грн/шт' : '679грн/шт') : size === 10 ? (density === 42 ? '659грн/шт' : density === 50 ? '746грн/шт' : '792грн/шт') : size === 12 ? (density === 42 ? '772грн/шт' : density === 50 ? '879грн/шт' : '952грн/шт') : size === 15 ? (density === 42 ? '932грн/шт' : density === 50 ? '1066грн/шт' : '1146грн/шт'): ''}
              </span>
            </div>
            
            {/* Кнопка купити */}
            <button 
              className={`w-full py-2 font-medium transition duration-300 ${
                addedToCart[index] 
                  ? 'bg-green-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
              onClick={() => handleAddToCart(index, density)}
            >
              {addedToCart[index] ? 'ДОДАНО В КОШИК' : 'КУПИТИ'}
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
      image: m2, 
      size: 2,
      densities: [42, 50, 60],
      prices: [339, 369, 409],
      itemsCount: 7,
      width: 1.2,
      height: 0.8
    },
    {
      image: m3, 
      size: 3,
      densities: [42, 50, 60],
      prices: [419, 499, 589],
      itemsCount: 9,
      width: 1.2,
      height: 0.8
    },
    {
      image: m4,
      size: 4,
      densities: [42, 50, 60],
      prices: [539, 599, 689],
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m5,
      size: 5,
      densities: [42, 50, 60],
      prices: [599, 689, 789],
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m6,
      size: 6,
      densities: [42, 50, 60],
      prices: [659, 789, 889],
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m8,
      size: 8,
      densities: [42, 50, 60],
      prices: [819, 929, 1019],
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m10,
      size: 10,
      densities: [42, 50, 60],
      prices: [989, 1119, 1189],
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m12,
      size: 12,
      densities: [42, 50, 60],
      prices: [1159, 1319, 1429],
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    },
    {
      image: m15,
      size: 15,
      densities: [42, 50, 60],
      prices: [1399, 1599, 1719],
      itemsCount: 11,
      width: 1.2,
      height: 0.8
    }
  ];

  const dripIrrigationProducts = [
    {
      id: 'drip-50m',
      name: 'Комплектація 50 м',
      image: dripIr1,
      price: 399,
      items: [
        { name: 'крапельна стрічка', quantity: '50м' },
        { name: 'труба', quantity: '20м' },
        { name: "з'єднання для шланга", quantity: '1шт' },
        { name: 'кран', quantity: '1шт' },
        { name: 'трійник перехідний труба-стрічка', quantity: '5шт' },
        { name: 'заглушка для стрічки', quantity: '5шт' },
        { name: "з'єднання ремонтне для стрічки", quantity: '1шт' },
        { name: 'заглушка для труби', quantity: '1шт' }
      ]
    },
    {
      id: 'drip-100m',
      name: 'Комплектація 100 м',
      image: dripIr2,
      price: 625,
      items: [
        { name: 'крапельна стрічка', quantity: '100м' },
        { name: 'труба', quantity: '20м' },
        { name: "з'єднання для шланга", quantity: '1шт' },
        { name: 'кран', quantity: '1шт' },
        { name: 'трійник перехідний труба-стрічка', quantity: '10шт' },
        { name: 'заглушка для стрічки', quantity: '10шт' },
        { name: "з'єднання ремонтне для стрічки", quantity: '2шт' },
        { name: 'заглушка для труби', quantity: '2шт' }
      ]
    },
    {
      id: 'drip-200m',
      name: 'Комплектація 200 м',
      image: dripIr3,
      price: 1095,
      items: [
        { name: 'крапельна стрічка', quantity: '200м' },
        { name: 'труба', quantity: '20м' },
        { name: "з'єднання для шланга", quantity: '1шт' },
        { name: 'кран', quantity: '1шт' },
        { name: 'трійник перехідний труба-стрічка', quantity: '20шт' },
        { name: 'заглушка для стрічки', quantity: '20шт' },
        { name: "з'єднання ремонтне для стрічки", quantity: '4шт' },
        { name: 'заглушка для труби', quantity: '4шт' }
      ]
    }
  ];

  const benefits = [
    'Автоматизація системи поливу',
    'Кореневий метод зрошення',
    'Забезпечення аерації ґрунту',
    'Рівномірність поливу рослини',
    'Економія води на 40-50%',
    'Збереження вологості ґрунту',
    'Економія часу та сил',
    'Зниження ризику хвороб рослин',
    'Можливість подачі добрив',
    'Проста установка обладнання',
    'Не стимулює зростання бур\'янів',
    'Раннє дозрівання плодових',
    'Підвищення врожайності'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Парники */}
      {parniky.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}

      {/* Секція крапельного поливу */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
          Обладнання для крапельного поливу
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Картка переваг */}
          <div className="bg-white rounded shadow p-4">
            <div className="mb-4">
              <img 
                src={dripIrMain} 
                alt="Крапельний полив" 
                className="w-full h-40 object-cover rounded"
              />
            </div>
            <h3 className="text-xl font-bold text-teal-800 mb-4">
              Переваги парника з краплинним поливом
            </h3>
            <ul className="space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Продукти крапельного поливу */}
          {dripIrrigationProducts.map((product, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <div className="flex justify-center mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-40 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
                {product.name}
              </h3>
              <ul className="space-y-1 text-sm mb-6">
                {product.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-600 text-center mb-4">
                  {product.price} грн
                </p>
                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;