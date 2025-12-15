import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-center md:text-left">
        <span className="block mb-4 text-lg font-bold tracking-widest text-[#00838f] uppercase">
          IT Business Partner
        </span>
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
          (주)퓨처인테크에 오신것을 환영합니다.
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
          Find & Provide<br />
          Solutions for<br />
          Business Growth
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          (주)퓨처인테크는 고객의 성공적인 비즈니스를 위해<br className="hidden md:inline" />
          최적의 IT 솔루션과 인프라를 제공합니다.
        </p>
      </div>
      
      <div className="flex-1 w-full flex justify-center">
        <div className="relative w-full max-w-[600px] h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Future in Tech Business Environment" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#006064]/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;