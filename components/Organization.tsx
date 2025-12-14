import React from 'react';
import { Users, Handshake, Server } from 'lucide-react';

const Organization: React.FC = () => {
  const departments = [
    { icon: <Users size={32} />, title: '경영관리본부' },
    { icon: <Handshake size={32} />, title: '영업본부' },
    { icon: <Server size={32} />, title: '인프라서비스본부' },
  ];

  return (
    <div className="bg-[#f9fbfd] w-full py-24">
      <section id="organization" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#006064] mb-4">Organization</h2>
          <p className="text-gray-500 text-lg">체계적인 조직 구조를 바탕으로 전문 서비스를 제공합니다.</p>
        </div>

        <div className="flex flex-col items-center">
          {/* CEO Node */}
          <div className="relative z-10 bg-[#006064] text-white px-16 py-4 rounded-full font-bold text-xl shadow-lg mb-12">
            CEO
            {/* Vertical Line from CEO */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-300"></div>
          </div>

          {/* Departments Grid Container */}
          <div className="relative w-full">
            {/* Horizontal Connector Line (Desktop only) - Adjusted for 3 columns (starts/ends at 1/6 width) */}
            <div className="hidden md:block absolute -top-6 left-[16.66%] right-[16.66%] h-0.5 bg-gray-300"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div 
                  key={index} 
                  className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#00838f] transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Vertical Connector Line for each card (Desktop only) */}
                  <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-300 group-hover:bg-[#00838f] transition-colors"></div>
                  
                  <div className="mb-4 text-[#00838f] p-3 bg-cyan-50 rounded-full">
                    {dept.icon}
                  </div>
                  <span className="font-bold text-gray-800 text-lg">{dept.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organization;