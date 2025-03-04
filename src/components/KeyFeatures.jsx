import React from 'react';
import keyFImg from '../assets/ecofriendly.png'

const KeyFeatures = () => {
  const features = [
    {
      id: 1,
      image: keyFImg,
      title: 'Не має тисячної витривалості.'
    },
    {
      id: 2,
      image: keyFImg,
      title: 'Не затримує повітря та воду.'
    },
    {
      id: 3,
      image: keyFImg,
      title: 'Пропускає близько 95% світла'
    },
    {
      id: 4,
      image: keyFImg,
      title: 'Тримає тепло краще повітря (до ~7°С)'
    },
    {
      id: 5,
      image: keyFImg,
      title: 'Захищає від опадів (дощ, град, сніг)'
    },
    {
      id: 6,
      image: keyFImg,
      title: 'Захищає рослини від перегріву'
    },
    {
      id: 7,
      image: keyFImg,
      title: 'Захищає від паразитів, комах та птахів'
    },
    {
      id: 8,
      image: keyFImg,
      title: 'Не гниє, стійкий до грибів та цвілі'
    }
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
          Ключові особливості парника «Пролісок»
        </h2>
        
        <div className="flex flex-wrap justify-center">
          {features.slice(0, 3).map((feature) => (
            <div key={feature.id} className="w-full sm:w-1/2 md:w-1/3 mb-10 flex flex-col items-center px-4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 text-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center">
          {features.slice(3, 6).map((feature) => (
            <div key={feature.id} className="w-full sm:w-1/2 md:w-1/3 mb-10 flex flex-col items-center px-4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 text-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center">
          {features.slice(6, 8).map((feature) => (
            <div key={feature.id} className="w-full sm:w-1/2 md:w-1/3 mb-10 flex flex-col items-center px-4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 text-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;