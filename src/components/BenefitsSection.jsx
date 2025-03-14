import React from 'react';
import { Clock, Award, Droplets } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 15 minutes benefit */}
          <div className="flex flex-col items-center text-center p-6 border-r border-gray-300">
            <span className="text-6xl font-bold text-red-600 mb-1">15</span>
            <span className="text-xl font-medium text-red-600 mb-4">хвилин</span>
            <Clock className="text-gray-700 mb-3" size={32} />
            <p className="text-sm text-gray-800">
              Реальний <strong>час встановлення</strong> парника. 
              Парники одразу готові до монтажу — все 
              необхідне вже в комплекті. 
              Проста інструкція — надійна конструкція!
            </p>
          </div>
          
          {/* 5 years benefit */}
          <div className="flex flex-col items-center text-center p-6 border-r border-gray-300">
            <span className="text-6xl font-bold text-red-600 mb-1">5</span>
            <span className="text-xl font-medium text-red-600 mb-4">років</span>
            <Award className="text-gray-700 mb-3" size={32} />
            <p className="text-sm text-gray-800">
              Саме <strong>на такий термін даємо гарантію </strong> 
              на товари нашого виробництва. Наші 
              парники Ви зможете використовувати 
              не один сезон, вони будуть надійно 
              служити Вам з року в рік.
            </p>
          </div>
          
          {/* 3 times benefit */}
          <div className="flex flex-col items-center text-center p-6">
            <span className="text-6xl font-bold text-red-600 mb-1">3</span>
            <span className="text-xl font-medium text-red-600 mb-4">раза</span>
            <Droplets className="text-gray-700 mb-3" size={32} />
            <p className="text-sm text-gray-800">
              У стільки разів можна скоротити 
              кількість поливів завдяки використанню 
              парника «Пролісок», оскільки його 
              конструкція дозволяє краще утримувати 
              вологу.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;