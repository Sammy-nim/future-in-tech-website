import React from 'react';
import { Compass } from 'lucide-react';

const BusinessDirection: React.FC = () => {
  return (
    <section id="business-direction" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-[#00838f] font-bold text-sm mb-6">
                    <Compass size={18} />
                    <span>Business Direction</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-[#006064] mb-6 leading-tight">
                    기술에서 미래를 찾는다
                 </h2>
                 <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                    <p>
                        (주)퓨처인테크는 <span className="font-bold text-gray-800">"기술에서 미래를 찾는다"</span>라는 설립이념을 가지고 있습니다.
                    </p>
                    <p>
                        고객의 비즈니스 성공을 위해서 우수한 제품과 서비스를 제공하는 것을 회사의 이념으로 하고 있습니다.
                    </p>
                 </div>
            </div>
            
            <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md aspect-video bg-gradient-to-br from-[#00838f] to-[#006064] rounded-2xl shadow-xl flex items-center justify-center text-white p-8">
                    <div className="text-center">
                        <p className="text-xl font-medium opacity-90 mb-2">Future In Tech</p>
                        <p className="text-3xl font-bold">Your Best Partner</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BusinessDirection;