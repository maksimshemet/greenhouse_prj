import React from 'react';
import dripIrMain from '../assets/drip-irrigation-1.jpg';
import dripIr1 from '../assets/drip-irrigation-2.jpg';
import dripIr2 from '../assets/drip-irrigation-3.jpg';
import dripIr3 from '../assets/drip-irrigation-4.jpg';

const DripIrrigationSection = () => {
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
    <div className="relative w-full py-10 overflow-hidden">
      {/* Background water image */}
      <div 
        className="absolute inset-0 bg-blue-100 bg-opacity-30 z-0" 
        style={{
          backgroundImage: `url({'/api/placeholder/1920/400'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
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
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Product Card - 50m */}
          <div className="bg-white rounded shadow p-4">
            <div className="flex justify-center mb-4">
              <img 
                src={dripIr1} 
                alt="Комплектація 50 м" 
                className="h-40 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
              Комплектація 50 м
            </h3>
            <ul className="space-y-1 text-sm mb-6">
              <li className="flex justify-between">
                <span>крапельна стрічка</span>
                <span>50м</span>
              </li>
              <li className="flex justify-between">
                <span>труба</span>
                <span>20м</span>
              </li>
              <li className="flex justify-between">
                <span>з'єднання для шланга</span>
                <span>1шт</span>
              </li>
              <li className="flex justify-between">
                <span>кран</span>
                <span>1шт</span>
              </li>
              <li className="flex justify-between">
                <span>трійник перехідний труба-стрічка</span>
                <span>5шт</span>
              </li>
              <li className="flex justify-between">
                <span>заглушка для стрічки</span>
                <span>5шт</span>
              </li>
              <li className="flex justify-between">
                <span>з'єднання ремонтне для стрічки</span>
                <span>1шт</span>
              </li>
              <li className="flex justify-between">
                <span>заглушка для труби</span>
                <span>1шт</span>
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-2xl font-bold text-red-600 text-center mb-4">
                399 грн
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors">
                КУПИТИ
              </button>
            </div>
          </div>
          
          {/* Product Card - 100m */}
          <div className="bg-white rounded shadow p-4">
            <div className="flex justify-center mb-4">
              <img 
                src={dripIr2}
                alt="Комплектація 100 м" 
                className="h-40 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
              Комплектація 100 м
            </h3>
            <ul className="space-y-1 text-sm mb-6">
              <li className="flex justify-between">
                <span>крапельна стрічка</span>
                <span>100м</span>
              </li>
              <li className="flex justify-between">
                <span>труба</span>
                <span>20м</span>
              </li>
              <li className="flex justify-between">
                <span>з'єднання для шланга</span>
                <span>1шт</span>
              </li>
              <li className="flex justify-between">
                <span>кран</span>
                <span>1шт</span>
              </li>
              <li className="flex justify-between">
                <span>трійник перехідний труба-стрічка</span>
                <span>10шт</span>
              </li>
              <li className="flex justify-between">
                <span>заглушка для стрічки</span>
                <span>10шт</span>
              </li>
              <li className="flex justify-between">
                <span>з'єднання ремонтне для стрічки</span>
                <span>2шт</span>
              </li>
              <li className="flex justify-between">
                <span>заглушка для труби</span>
                <span>2шт</span>
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-2xl font-bold text-red-600 text-center mb-4">
                625 грн
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors">
                КУПИТИ
              </button>
            </div>
          </div>
          
          {/* Product Card - 200m */}
          <div className="bg-white rounded shadow p-4">
            <div className="flex justify-center mb-4">
              <img 
                src={dripIr3}
                alt="Комплектація 200 м" 
                className="h-40 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-teal-800 mb-4 text-center">
              Комплектація 200 м
            </h3>
            <ul className="space-y-1 text-sm mb-6">
              <li className="flex justify-between">
                <span>крапельна стрічка</span>
                <span>200м</span>
              </li>
              <li className="flex justify-between">
                <span>труба</span>
                <span>20м</span>
              </li>
              <li className="flex justify-between">
                <span>з'єднання для шланга</span>
                <span>1шт</span>
              </li>
              <li className="flex justify-between">
                <span>кран</span>
                <span>1шт</span>
              </li>
              <li className="flex justify-between">
                <span>трійник перехідний труба-стрічка</span>
                <span>20шт</span>
              </li>
              <li className="flex justify-between">
                <span>заглушка для стрічки</span>
                <span>20шт</span>
              </li>
              <li className="flex justify-between">
                <span>з'єднання ремонтне для стрічки</span>
                <span>4шт</span>
              </li>
              <li className="flex justify-between">
                <span>заглушка для труби</span>
                <span>4шт</span>
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-2xl font-bold text-red-600 text-center mb-4">
                1095 грн
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors">
                КУПИТИ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DripIrrigationSection;