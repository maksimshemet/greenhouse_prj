import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import klipsy from '../assets/klipsy.png';
import kolyshki from '../assets/kolyshki.png';
import parnik_podsnezhnik from '../assets/parnik_podsnezhnik.jpg';
import parnik_s_plenkoy from '../assets/parnik_s_plenkoy.jpg';
import agrovolokno from '../assets/agrovolokno.png';
import kilochky from '../assets/kilochky.png';

const CounterfeitComparison = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-10">
          Як розпізнати підробку парника «Пролісок»?
        </h2>
        
        {/* Comparison rows */}
        <div className="space-y-8 mb-10">
          {/* Row 1: Agro fabric */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Агроволокно у оригіналу</h3>
              <p className="text-sm text-gray-700">
                Матеріал за стандартами ЄС з щільністю 42 г/м2 (можна перевірити при зважуванні).
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <img src={agrovolokno} alt="Original agro fabric" className="rounded-full bg-gray-50" />
                <CheckCircle size={40} className="absolute -top-2 -right-2 text-green-500" />
              </div>
              <div className="relative ml-12">
                <img src={agrovolokno} alt="Counterfeit agro fabric" className="rounded-full bg-gray-50" />
                <XCircle size={40} className="absolute -top-2 -right-2 text-red-500" />
              </div>
            </div>
            
            <div className="w-full md:w-1/3 px-4 mt-4 md:mt-0 text-right">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Агроволокно підробки</h3>
              <p className="text-sm text-gray-700">
                Реальна щільність 30 г/м2, постачальник матеріалу РФ або Китай (можна перевірити при зважуванні).
              </p>
            </div>
          </div>
          
          {/* Row 2: Clips */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Кліпси у оригіналу</h3>
              <p className="text-sm text-gray-700">
                Кліпси розроблені для парника з якісної сировини, монолітні, міцні та гнучкі, з гладкими краями.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <img src={klipsy} alt="Original clips" className="rounded-full bg-gray-50" />
                <CheckCircle size={40} className="absolute -top-2 -right-2 text-green-500" />
              </div>
              <div className="relative ml-12">
                <img src={klipsy} alt="Counterfeit clips" className="rounded-full bg-gray-50" />
                <XCircle size={40} className="absolute -top-2 -right-2 text-red-500" />
              </div>
            </div>
            
            <div className="w-full md:w-1/3 px-4 mt-4 md:mt-0 text-right">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Кліпси підробки</h3>
              <p className="text-sm text-gray-700">
                Кліпси невідомого походження, які використовуються для сантехнічних робіт. Краї гострі, що рвуть покриття агроволокна.
              </p>
            </div>
          </div>
          
          {/* Row 3: Stakes */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Оригінальні кілки</h3>
              <p className="text-sm text-gray-700">
                Колок рівномірної товщини із загостренням до краю має 4 точки грані. Безпосередньо вставляється в дугу. Монолітний, без деталей. Міцно тримається в ґрунті.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <img src={kilochky} alt="Original stakes" className="rounded-full bg-gray-50" />
                <CheckCircle size={40} className="absolute -top-2 -right-2 text-green-500" />
              </div>
              <div className="relative ml-12">
                <img src={kilochky} alt="Counterfeit stakes" className="rounded-full bg-gray-50" />
                <XCircle size={40} className="absolute -top-2 -right-2 text-red-500" />
              </div>
            </div>
            
            <div className="w-full md:w-1/3 px-4 mt-4 md:mt-0 text-right">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Кілки підробки</h3>
              <p className="text-sm text-gray-700">
                Ломкий кілочок. Передня товщина від верху до низу по всій довжині стрижня. Має насадку з різьбленням, яке швидко стирається (парник починає хитатися).
              </p>
            </div>
          </div>
        </div>
        
        {/* Warning about no-stake greenhouses */}
        <div className="bg-gray-50 p-6 rounded-lg mb-16">
          <div className="flex items-start">
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-red-600 mb-4">Остерігайтеся парників без кілочків !!!</h3>
              <p className="text-sm text-gray-700">
                Такі міні парники йдуть у комплекті з дугами із водопровідної труби, яку виробники вибирають за її дешевизну. Ці компанії пропонують «найшвидший» монтаж шляхом занурення загостреного кінця труби в ґрунт. Однак на практиці ці конструкції хисткі та нестійкі. Водопровідна труба руйнується під дією сонця і стає непридатним протягом року експлуатації.
              </p>
            </div>
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="relative">
                <img src={kilochky} alt="Water pipe" className="bg-gray-200 rounded" />
                <XCircle size={40} className="absolute -top-2 -right-2 text-red-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Comparison of greenhouses */}
        <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">
          Переваги парника з агроволокна<br />перед парником із плівкою
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Prolisok greenhouse */}
          <div>
            <div className="flex items-center mb-4">
              <CheckCircle size={24} className="text-green-500 mr-2" />
              <h3 className="text-lg font-medium text-green-700">Парник «Пролісок»</h3>
            </div>
            <div className="mb-6">
              <img 
                src={parnik_podsnezhnik} 
                alt="Пролісок greenhouse" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Парник "Пролісок" легкий за вагою.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Дозволяє рослинам дихати, підтримуючи оптимальний баланс тепла та вологи.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Парники прискорюють зростання розсади в 2-3 рази.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Пропускає до 93% сонячного світла.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Теплиця Пролісок відмінно захищає від паразитів, комах та птахів.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Агроволокно використовують понад 5 років.</span>
              </li>
            </ul>
          </div>
          
          {/* Film greenhouse */}
          <div>
            <div className="flex items-center mb-4">
              <XCircle size={24} className="text-red-500 mr-2" />
              <h3 className="text-lg font-medium text-red-700">Парник із плівкою</h3>
            </div>
            <div className="mb-6">
              <img 
                src={parnik_s_plenkoy}
                alt="Film greenhouse" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-red-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Плівковий парник важкий, не мобільний.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-red-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Потребує частого провітрювання, може накопичувати шкідливий конденсат.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-red-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Може погіршити стан рослин.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-red-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Пропускає до 76% сонячного світла.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-red-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Може стати причиною зараження рослин фітофторою та іншими хворобами.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 bg-red-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                <span>Плівка потребує заміни разів у 2 сезону.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterfeitComparison;