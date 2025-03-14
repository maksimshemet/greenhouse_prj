import React from 'react';
import agrovolokno from '../assets/agrovolokno.png';
import kolyshki from '../assets/kolyshki.png';
import proizvodstvo from '../assets/proizvodstvo.png';
import ecofriendly from '../assets/ecofriendly.png';
import klipsy from '../assets/klipsy.png';
import garantia from '../assets/garantia.png';

const FeatureSection = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-10">
          Чому наші парники найкращі в Україні?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1: Ukrainian Quality */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <img src={ecofriendly} alt="Eco certificate" className="w-16 h-16" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Українська якість, вітчизняна сертифікація
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Компанія Агропарник – український виробник парників «Пролісок» (Підсніжник).
              </p>
              <div className="bg-red-600 text-white text-xs px-2 py-1 inline-block mb-2">
                Зверніть увагу!
              </div>
              <p className="text-sm text-gray-700">
                Всі матеріали сертифіковані, відповідають стандартам якості. Ми готові довести вам, що українське надійне і недороге.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Також у нас Ви можете купити парник з крапинним поливом, що істотно полегшить завдання поливу рослин і підвищить врожайність
              </p>
            </div>
          </div>
          
          {/* Feature 2: Own Production */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <img src={proizvodstvo} alt="Factory" className="w-16 h-16" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Власне виробництво – ціна без посередників
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Ми є офіційним виробником парників «Пролісок» в Україні, тому ми можемо запропонувати найрозумнішу ціну за відмінну якість товару. Чому б не купити парник без посередників, прихованих платежів і націнок?
              </p>
              <div className="bg-red-600 text-white text-xs px-2 py-1 inline-block mb-2">
                Зверніть увагу!
              </div>
              <p className="text-sm text-gray-700">
                Співпраця з нами вигідна: ми не забуваємо радувати суттєвими акціями та знижками від виробника.
              </p>
            </div>
          </div>
          
          {/* Feature 3: Best Agro Fabric */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                <img src={agrovolokno} alt="Fabric" className="w-16 h-16" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Найщільніше агроволокно на українському ринку
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Щільність покриття, яке ми пропонуємо, — 42 г/м², 50 г/м², 60 г/м².
              </p>
              <div className="bg-red-600 text-white text-xs px-2 py-1 inline-block mb-2">
                Зверніть увагу!
              </div>
              <p className="text-sm text-gray-700">
              Нечесні виробники декларують аналогічну щільність агроволокна, але її легко перевірити: якщо зважити 1 м2 нашого матеріалу ви побачите на  ≈41/43 г; при зважуванні укривного матеріалу інших фірм ваги покажуть ≈28/30 г. Таке неякісне агроволокно поставляють з РФ та Китаю, а не з країн ЄС.
              </p>
            </div>
          </div>
          
          {/* Feature 4: Quality Pipes */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <img src={kolyshki} alt="Pipe" className="w-16 h-16" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Сплав труби, розроблений нашими фахівцями
              </h3>
              <p className="text-sm text-gray-700">
                Ми закуповуємо якісну сировину для виготовлення деталей парника по ГОСТ України для сільськогосподарської діяльності.
              </p>
              <div className="bg-red-600 text-white text-xs px-2 py-1 inline-block mb-2">
                Зверніть увагу!
              </div>
              <p className="text-sm text-gray-700">
              Псевдо-виробники використовують труби, призначені для водопровідних/ сантехнічних робіт, що категорично не підходить для майданчиків просто неба.
              </p>
            </div>
          </div>

          {/* Feature 5: Clips and Stakes */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <img src={klipsy} alt="Pipe" className="w-16 h-16" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Кліпси та кілки, що не ламаються при використанні
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Кліпси та кілки ми не замовляємо, а виробляємо самі. Ці деталі відрізняються особливою міцністю і еластичністю. Вони не тріскаються при багаторазовому використанні, довгий час не втрачають форму. Стрижень кілочка рівномірної товщини, трохи загострений до кінця.
              </p>
              <div className="bg-red-600 text-white text-xs px-2 py-1 inline-block mb-2">
                Зверніть увагу!
              </div>
              <p className="text-sm text-gray-700">
                На неякісних кілочках товщина звужується від верху до кінця, чим обумовлюється ламкість важливо, а значить, виникає необхідність частої заміни. Так нечесний виробник заробляє на продажі додаткових кілочків.
              </p>
            </div>
          </div>

          {/* Feature 6: Quality Guarantee */}
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <img src={garantia} alt="Pipe" className="w-16 h-16" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Гарантії якості від офіційного виробника
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Наша продукція – найнадійніша і довговічна в Україні. Ми даємо 5-річну гарантію на товари нашого виробництва.
              </p>
              <div className="bg-red-600 text-white text-xs px-2 py-1 inline-block mb-2">
                Зверніть увагу!
              </div>
              <p className="text-sm text-gray-700">
                Якщо наш парник не відповідає опису, ми повернемо гроші без зайвих питань.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Якщо ви хочете здійснити покупку, якою залишитеся задоволені — замовляйте парник «Пролісок» від Агропарник.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;