import grnHs600x400 from '../assets/grnhs600x400.jpg';
import klipsy from '../assets/klipsy.png';
import dugy from '../assets/dugy.png';
import kolyshki from '../assets/kilochky.png';
import agrovolokno2 from '../assets/agrovolokno2.png';

const ProductFeatures = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-3">
          Парник «Пролісок» покращеної комплектації
        </h2>
        <h3 className="text-xl text-amber-800 text-center mb-8">
          від офіційного виробника
        </h3>
        
        {/* Main product image */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="border-8 border-gray-100 shadow-lg">
            <img 
              src={grnHs600x400} 
              alt="Парник Пролісок" 
              className="w-full"
            />
          </div>
        </div>
        
        {/* Product components */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {/* Component 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4">
              <img 
                src={klipsy} 
                alt="Кліпси" 
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="font-bold text-amber-900 mb-2">Надійні кліпси</h4>
            <p className="text-sm text-gray-700">
              Кліпси надійно фіксують агроволокно на дугах, спрощують полив і прополювання рослин.
            </p>
          </div>
          
          {/* Component 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4">
              <img 
                src={dugy}
                alt="Дуги з ПНД" 
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="font-bold text-amber-900 mb-2">Дуги з ПНД</h4>
            <p className="text-sm text-gray-700">
              Такі дуги стійкі до ультрафіолету, не ламаються і не гнуться. Зроблені з якісної сировини, яка гарантує їх довговічність.
            </p>
          </div>
          
          {/* Component 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4">
              <img 
                src={kolyshki} 
                alt="Кілочки" 
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="font-bold text-amber-900 mb-2">Міцні кілочки</h4>
            <p className="text-sm text-gray-700">
              Міцні товсті кілочки полегшують процес встановлення, роблять парник стійким.
            </p>
          </div>
          
          {/* Component 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4">
              <img 
                src={agrovolokno2}
                alt="Агроволокно" 
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="font-bold text-amber-900 mb-2">Щільне агроволокно</h4>
            <p className="text-sm text-gray-700">
              Агроволокно щільністю 42 г/м² європейського виробництва, яке пропускає достатню кількість вологи, повітря і світла.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;