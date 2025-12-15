import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#051626] overflow-hidden">
      {/* Background Gradient/Mesh Effect for AI feel */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#01A982] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <span className="block mb-4 text-lg font-bold tracking-widest text-[#26dec0] uppercase">
            IT Business Partner
          </span>
          <p className="text-xl md:text-2xl font-bold text-[#b2dfdb] mb-6">
            (주)퓨처인테크에 오신것을 환영합니다.
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#01A982] leading-tight mb-8 drop-shadow-[0_0_15px_rgba(1,169,130,0.5)]">
            We<br />
            Find & Provide<br />
            Solutions for<br />
            Customer's Business Growth
          </h1>
          <p className="text-lg text-[#80cbc4] leading-relaxed">
            (주)퓨처인테크는 고객의 성공적인 비즈니스를 위해<br className="hidden md:inline" />
            최적의 IT 솔루션과 인프라를 제공합니다.
          </p>
        </div>
        
        <div className="flex-1 w-full flex justify-center z-10">
          <div className="relative w-full max-w-[600px] h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(1,169,130,0.3)] group border border-[#01A982]/30">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80" 
              alt="AI and Future Technology" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051626]/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;