import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const phone = document.getElementById('phone').value;
    const delivery = document.getElementById('delivery').value;
    const comment = document.getElementById('comment').value;

    if (!phone || !delivery) {
      setError('Будь ласка, заповніть номер телефону та адресу доставки');
      return;
    }

    const order = {
      items: cart,
      totalPrice: totalPrice,
      phone: phone,
      delivery: delivery,
      comment: comment
    };

    // Here you would typically send the order to your backend
    console.log('Створено замовлення:', order);
    setShowModal(true);
    clearCart();
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Замовлення прийнято!</h3>
              <p className="text-gray-600 mb-6">Дякуємо за замовлення! Ми зв'яжемося з вами найближчим часом.</p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
              >
                Закрити
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Ваш кошик</h1>
          <Link to="/" className="text-green-600 hover:text-green-700 font-medium flex items-center transition-colors">
            <span>← Продовжити покупки</span>
          </Link>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">Ваш кошик порожній</p>
            <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded transition duration-300">
              Продовжити покупки
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-24 mr-6">
                    {item.image && <img src={item.image} alt={item.name} className="w-full h-auto rounded" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-gray-600">{item.price.toFixed(2)} грн</p>
                  </div>
                  <div className="flex items-center mx-8">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-8 h-8 flex items-center justify-center rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b border-gray-300 font-medium">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-8 h-8 flex items-center justify-center rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <div className="font-semibold text-lg mr-6">
                    {(item.price * item.quantity).toFixed(2)} грн
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
                  >
                    Видалити
                  </button>
                </div>
              ))}
            </div>
            {/* Error Message */}
            {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setError('')}>
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                </svg>
                </span>
            </div>
            )}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Підсумок замовлення</h2>
              <div className="flex justify-between text-lg mb-3">
                <span>Сума:</span>
                <span>{totalPrice.toFixed(2)} грн</span>
              </div>
              <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-gray-300">
                <span>Всього:</span>
                <span>{totalPrice.toFixed(2)} грн</span>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/" className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-medium py-3 px-6 rounded text-center transition duration-300">
                  Продовжити покупки
                </Link>
                <button 
                  onClick={handleCreateOrder}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded transition duration-300"
                >
                  Оформити замовлення
                </button>
              </div>
              <form className="mt-6">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Номер телефону:</label>
                  <input type="text" id="phone" className="w-full px-3 py-2 border rounded" placeholder="Ваш номер телефону" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="delivery">Відділення Нової/Укр Пошти:</label>
                  <input type="text" id="delivery" className="w-full px-3 py-2 border rounded" placeholder="Введіть відділення" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="comment">Коментар до замовлення:</label>
                  <input type="text" id="comment" className="w-full px-3 py-2 border rounded" placeholder="Введіть коментар до замовлення" />
                </div>
              </form>
              <button 
                onClick={clearCart}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded mt-4 transition duration-300"
              >
                Очистити кошик
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
