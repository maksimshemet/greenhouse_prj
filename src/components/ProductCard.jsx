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
import dripIrMain from '../assets/drip-irrigation-1.jpg';
import dripIr1 from '../assets/drip-irrigation-2.jpg';
import dripIr2 from '../assets/drip-irrigation-3.jpg';
import dripIr3 from '../assets/drip-irrigation-4.jpg';

const ProductCard = ({ image, size, densities, basePrice, itemsCount, width, height, addToCart }) => {
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
            <button 
              className="w-full bg-green-600 text-white py-2 font-medium hover:bg-green-700 transition"
              onClick={() => addToCart({ image, size, density, quantity: quantities[index], price: basePrice + (index * 50) })}
            >
              ДОДАТИ ДО КОШИКА
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCatalog = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  const [fullName, setFullName] = useState('');
  const [postOffice, setPostOffice] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [isNovaPoshta, setIsNovaPoshta] = useState(false);
  const [isUkrPoshta, setIsUkrPoshta] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

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

  // Drip irrigation products
  const dripIrrigationProducts = [
    {
      image: dripIr1,
      name: 'Комплектація 50 м',
      description: [
        { label: 'крапельна стрічка', value: '50м' },
        { label: 'труба', value: '20м' },
        { label: 'з\'єднання для шланга', value: '1шт' },
        { label: 'кран', value: '1шт' },
        { label: 'трійник перехідний труба-стрічка', value: '5шт' },
        { label: 'заглушка для стрічки', value: '5шт' },
        { label: 'з\'єднання ремонтне для стрічки', value: '1шт' },
        { label: 'заглушка для труби', value: '1шт' }
      ],
      price: 399,
      type: 'drip'
    },
    {
      image: dripIr2,
      name: 'Комплектація 100 м',
      description: [
        { label: 'крапельна стрічка', value: '100м' },
        { label: 'труба', value: '20м' },
        { label: 'з\'єднання для шланга', value: '1шт' },
        { label: 'кран', value: '1шт' },
        { label: 'трійник перехідний труба-стрічка', value: '10шт' },
        { label: 'заглушка для стрічки', value: '10шт' },
        { label: 'з\'єднання ремонтне для стрічки', value: '2шт' },
        { label: 'заглушка для труби', value: '2шт' }
      ],
      price: 625,
      type: 'drip'
    },
    {
      image: dripIr3,
      name: 'Комплектація 200 м',
      description: [
        { label: 'крапельна стрічка', value: '200м' },
        { label: 'труба', value: '20м' },
        { label: 'з\'єднання для шланга', value: '1шт' },
        { label: 'кран', value: '1шт' },
        { label: 'трійник перехідний труба-стрічка', value: '20шт' },
        { label: 'заглушка для стрічки', value: '20шт' },
        { label: 'з\'єднання ремонтне для стрічки', value: '4шт' },
        { label: 'заглушка для труби', value: '4шт' }
      ],
      price: 1095,
      type: 'drip'
    }
  ];

  // Drip irrigation benefits
  const dripIrrigationBenefits = [
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

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to add drip irrigation product to cart
  const addDripIrrigationToCart = (product) => {
    setCart([...cart, { 
      name: product.name, 
      price: product.price, 
      quantity: 1,
      type: 'drip'
    }]);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log('Order submitted', { cart, phoneNumber, comment, fullName, deliveryMethod, postOffice, isNovaPoshta, isUkrPoshta });
    const orderedItemIds = cart.map((item, index) => index);
    console.log('Ordered item IDs:', orderedItemIds);
    setOrderSuccess(true);
    // Clear cart and form fields after submission
    setCart([]);
    setPhoneNumber('');
    setComment('');
    setFullName('');
    setDeliveryMethod('');
    setPostOffice('');
    setIsNovaPoshta(false);
    setIsUkrPoshta(false);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNovaPoshtaChange = (e) => {
    setIsNovaPoshta(e.target.checked);
    if (e.target.checked) {
      setIsUkrPoshta(false);
    }
  };

  const handleUkrPoshtaChange = (e) => {
    setIsUkrPoshta(e.target.checked);
    if (e.target.checked) {
      setIsNovaPoshta(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        className="fixed top-4 right-4 bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg flex items-center"
        onClick={toggleModal}
      >
        <span>Кошик</span>
        <span className="ml-2 bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center">
          {cart.length}
        </span>
      </button>
      
      {/* Greenhouse products section */}
      <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">
        Парники з агроволокна
      </h2>
      {parniky.map((product, index) => (
        <ProductCard key={index} {...product} addToCart={addToCart} />
      ))}
      
      {/* Drip Irrigation Section */}
      <div className="relative w-full py-10 overflow-hidden mt-12 mb-8">
        {/* Background water image */}
        <div 
          className="absolute inset-0 bg-blue-100 bg-opacity-30 z-0" 
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
            Обладнання для крапельного поливу
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Benefits Card */}
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
                {dripIrrigationBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Drip Irrigation Product Cards */}
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
                  {product.description.map((item, idx) => (
                    <li key={idx} className="flex justify-between">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-2xl font-bold text-red-600 text-center mb-4">
                    {product.price} грн
                  </p>
                  <button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors"
                    onClick={() => addDripIrrigationToCart(product)}
                  >
                    ДОДАТИ ДО КОШИКА
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-96 max-h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Ваш кошик</h2>
            {cart.length === 0 ? (
              <p>Ваш кошик порожній</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.type === 'drip' ? 
                      `${item.name} - ${item.quantity} шт - ${item.price * item.quantity} грн` : 
                      `${item.size}м ${item.density}г/м² - ${item.quantity} шт - ${item.price * item.quantity} грн`
                    }
                  </li>
                ))}
              </ul>
            )}
            <form onSubmit={handleOrderSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="fullName">ПІБ</label>
                <input 
                  type="text" 
                  id="fullName" 
                  value={fullName} 
                  onChange={(e) => setFullName(e.target.value)} 
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Номер телефону</label>
                <input 
                  type="text" 
                  id="phoneNumber" 
                  value={phoneNumber} 
                  onChange={(e) => setPhoneNumber(e.target.value)} 
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="postOffice">Відділення нової або укр почти</label>
                <input 
                  type="text" 
                  id="postOffice" 
                  value={postOffice} 
                  onChange={(e) => setPostOffice(e.target.value)} 
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Спосіб доставки</label>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="novaPoshta" 
                    checked={isNovaPoshta} 
                    onChange={handleNovaPoshtaChange} 
                    className="mr-2"
                  />
                  <label htmlFor="novaPoshta" className="mr-4">Нова Пошта</label>
                  <input 
                    type="checkbox" 
                    id="ukrPoshta" 
                    checked={isUkrPoshta} 
                    onChange={handleUkrPoshtaChange} 
                    className="mr-2"
                  />
                  <label htmlFor="ukrPoshta">Укр Пошта</label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="comment">Коментар</label>
                <textarea 
                  id="comment" 
                  value={comment} 
                  onChange={(e) => setComment(e.target.value)} 
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-2 font-medium hover:bg-green-700 transition"
              >
                Замовити
              </button>
            </form>
            <button 
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded"
              onClick={toggleModal}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
      {orderSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Замовлення успішно оформлено!</h2>
            <button 
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded"
              onClick={() => setOrderSuccess(false)}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;