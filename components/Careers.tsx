import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="bg-white w-full py-24">
      <section id="careers" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#006064] mb-4">Recruiting</h2>
          <p className="text-gray-500 text-lg">퓨처인테크와 함께 미래를 만들어갈 인재를 모십니다.</p>
        </div>

        {/* Job Grid - Adjusted to 2 columns and centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Job Card 1 */}
          <div className="bg-[#f8fdfe] rounded-3xl p-10 border border-[#e1f5fe] hover:border-[#00838f] hover:shadow-xl transition-all duration-300 flex flex-col">
            <span className="bg-[#00838f] text-white px-3 py-1 rounded text-xs font-bold uppercase w-fit mb-6">Sales</span>
            <h3 className="text-2xl font-extrabold text-gray-800 mb-6">영업 (Sales)</h3>
            <div className="text-gray-600 mb-6 flex-grow">
              <p className="font-bold mb-2">[자격요건]</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>하드웨어/소프트웨어 영업 경험자</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-200 text-right text-sm text-gray-400">
              채용인원 : 00명
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-[#f8fdfe] rounded-3xl p-10 border border-[#e1f5fe] hover:border-[#00838f] hover:shadow-xl transition-all duration-300 flex flex-col">
            <span className="bg-[#00838f] text-white px-3 py-1 rounded text-xs font-bold uppercase w-fit mb-6">Engineer</span>
            <h3 className="text-2xl font-extrabold text-gray-800 mb-6">엔지니어</h3>
            <div className="text-gray-600 mb-6 flex-grow">
              <p className="font-bold mb-2">[자격요건]</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>하드웨어 설치 및 구축 경험자</li>
                <li>Unix/Linux OS 유경험자</li>
                <li>네트워크 설치/지원 유경험자</li>
                <li>가상화 구축 유경험자</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-200 text-right text-sm text-gray-400">
              채용인원 : 00명
            </div>
          </div>
        </div>

        {/* Recruiting Process */}
        <div className="bg-[#f0f4f8] rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-10">채용 절차</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto bg-white text-[#00838f] border-2 border-[#00838f] rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                01
              </div>
              <h4 className="font-bold text-lg text-gray-800">서류전형</h4>
              <p className="text-sm text-gray-500 mt-2">이메일 접수</p>
            </div>
            <div className="hidden md:block text-gray-300">
              <ArrowRight size={32} />
            </div>
             <div className="md:hidden text-gray-300 rotate-90">
              <ArrowRight size={32} />
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto bg-white text-[#00838f] border-2 border-[#00838f] rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                02
              </div>
              <h4 className="font-bold text-lg text-gray-800">1차 면접</h4>
              <p className="text-sm text-gray-500 mt-2">서류 합격자 개별통보</p>
            </div>
            <div className="hidden md:block text-gray-300">
              <ArrowRight size={32} />
            </div>
             <div className="md:hidden text-gray-300 rotate-90">
              <ArrowRight size={32} />
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto bg-white text-[#00838f] border-2 border-[#00838f] rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm">
                03
              </div>
              <h4 className="font-bold text-lg text-gray-800">최종합격</h4>
              <p className="text-sm text-gray-500 mt-2">입사 협의</p>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="bg-[#006064] text-white rounded-3xl p-10 md:p-16 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">지금 바로 지원하세요</h3>
          <p className="text-white/90 mb-4 text-lg">
            이력서와 자기소개서(경력자는 경력기술서 포함)를 이메일로 보내주세요.
          </p>
          <p className="text-white/70 text-sm mb-10 leading-relaxed">
            * 제출서류는 반환하지 않으며 입사지원 검토용으로만 사용됩니다.
          </p>
          <a 
            href="mailto:J3kwon@futureintech.co.kr" 
            className="inline-flex items-center gap-2 bg-white text-[#006064] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e0f7fa] hover:scale-105 transition-all duration-300 shadow-md"
          >
            <Mail size={20} />
            이메일 지원하기
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;