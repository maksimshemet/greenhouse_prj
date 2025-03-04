import React from 'react';
import reviewImg from '../assets/review3.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Аліна Зайцева',
      city: 'м. Херсон',
      image: reviewImg,
      testimonial: 'Якісна консультація про товар, швидка доставка. Приємно, що вже після здійснення покупки, коли нам знадобилося уточнити кілька моментів правильної установки, нам одразу відповіли на всі питання. Всім рекомендую купити парник Пролісок в Україні та насолоджуватися врожаєм!'
    },
    {
      id: 2,
      name: 'Олена Гаманюк',
      city: 'м. Бровари',
      image: reviewImg,
      testimonial: 'За результатами гордого сезону можу сказати, що «Пролісок» зарекомендував себе з гарного боку. Розміщувала на дачі, де буваю лише у вихідні. За години моєї відсутності розсада окріпла, ґрунт не пересихав, слідів шкідників не виявила. Здобула багатий урожай. Дякую.'
    },
    {
      id: 3,
      name: 'Андрій Кунда',
      city: 'м. Южноукраїнськ',
      image: reviewImg,
      testimonial: 'Дякуємо за парник! До цього робив своїми руками з плівкою, але він погано виконував свої функції. Дуже сподобалося, що накриття з агроволокна – значно менше часу займає догляд за рослинами. «Пролісок» купував, в першу чергу, для полуниці (для себе і на продаж). Не очікував побачити такі великі, соковиті і солодкі ягоди. Готую ділянку для встановлення нових парників наступного року!'
    },
    {
      id: 4,
      name: 'Інна Королевич',
      city: 'м. Чугуїв',
      image: reviewImg,
      testimonial: 'Все сподобалося: парник, обслуговування. Товар відповідає опису. Пролісок захищає від сонця, шкідників, вітру. Перевірено – з ним заморозки не страшні. Якщо вам дорога своя праця – усім рекомендую поставити парник з агроволокна. Дякуємо за оперативність!'
    }
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
          Відгуки наших клієнтів
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-amber-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{testimonial.city}</p>
              <p className="text-sm text-gray-700 text-center">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
        
        {/* Second row with single testimonial */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center max-w-md">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img 
                src={testimonials[3].image} 
                alt={testimonials[3].name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-amber-800">{testimonials[3].name}</h3>
            <p className="text-sm text-gray-600 mb-4">{testimonials[3].city}</p>
            <p className="text-sm text-gray-700 text-center">
              {testimonials[3].testimonial}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;