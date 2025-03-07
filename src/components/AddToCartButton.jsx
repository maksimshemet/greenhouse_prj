import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    
    // Navigate to cart page after a short delay
    setTimeout(() => {
      setIsAdded(false);
      navigate('/cart');
    }, 500);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-center mb-4">
        <button 
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-8 h-8 flex items-center justify-center rounded-l"
        >
          −
        </button>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={handleQuantityChange}
          className="w-12 text-center border-t border-b border-gray-300 py-1"
        />
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 w-8 h-8 flex items-center justify-center rounded-r"
        >
          +
        </button>
      </div>
      <button 
        onClick={handleAddToCart}
        className={`w-full py-2 px-4 rounded font-medium transition duration-300 ${
          isAdded 
            ? 'bg-green-700 text-white' 
            : 'bg-green-600 hover:bg-green-700 text-white'
        }`}
        disabled={isAdded}
      >
        {isAdded ? 'Додано в кошик!' : 'Додати в кошик'}
      </button>
    </div>
  );
};

export default AddToCartButton; 