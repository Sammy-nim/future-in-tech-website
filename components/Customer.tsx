import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Headphones } from 'lucide-react';

const Customer: React.FC = () => {
  // Client data without company logos
  const clients = [
    {
      id: 'hana-bank',
      name: '하나은행',
      nameEn: 'Hana Bank',
      category: '주요 금융 레퍼런스',
      description: '엔터프라이즈 고가용성 인프라 및 핵심 금융 시스템 지원',
    },
    {
      id: 'hana-fund',
      name: '하나펀드서비스',
      nameEn: 'Hana Fund Service',
      category: '자산운용 및 펀드 인프라',
      description: '신속·정확한 펀드 회계 및 미션 크리티컬 데이터 스토리지',
    },
    {
      id: 'kpn',
      name: '한국결제네트웍스',
      nameEn: 'Korea Payment Networks (KPN)',
      category: '결제 및 금융 VAN 네트워크',
      description: '초대용량 실시간 결제 트래픽 및 지능형 네트워크 인프라',
    },
  ];

  const highlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#01A982]" />,
      title: '고 가용성 시스템',
      desc: '무중단 비즈니스를 보장하는 견고한 아키텍처 설계',
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#01A982]" />,
      title: '24/7 전문 기술 지원',
      desc: '공인 인증 엔지니어의 상시 모니터링 및 신속 대응',
    },
    {
      icon: <Award className="w-6 h-6 text-[#01A982]" />,
      title: '검증된 구축 레퍼런스',
      desc: '다양한 산업군에서 축적된 엔터프라이즈 IT 구축 노하우',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#01A982]" />,
      title: '맞춤형 솔루션 컨설팅',
      desc: '고객의 비즈니스 환경과 예산에 최적화된 맞춤 제안',
    },
  ];

  return (
    <div className="bg-[#f8fdfe] w-full py-24 border-t border-gray-100">
      <section id="customer" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#006064] mb-4">Customer & References</h2>
          <p className="text-gray-500 text-lg">
            (주)퓨처인테크는 다양한 산업 분야의 고객과 함께 미래 비즈니스 혁신을 만들어갑니다.
          </p>
        </div>

        {/* Major Client References */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#01A982] uppercase tracking-widest">
              Major Clients
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              주요 고객사
            </h3>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              (주)퓨처인테크의 신뢰할 수 있는 엔터프라이즈 IT 인프라 솔루션을 함께하는 대표 고객사입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#01A982] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                    <span className="px-2.5 py-1 bg-[#e0f2f1] text-[#006064] text-xs font-bold rounded-full">
                      {client.category}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-xl font-black tracking-tight text-gray-900">
                      {client.name}
                    </h4>
                    <span className="text-xs font-semibold text-gray-400 tracking-wider">
                      {client.nameEn}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Value / Strengths Banner */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#01A982] uppercase tracking-widest">
              WHY CUSTOMERS TRUST FUTURE_IN_TECH
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              고객 중심의 차별화된 가치
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#f9fbfd] border border-gray-100 hover:border-[#01A982] transition-colors"
              >
                <div className="mb-4">{h.icon}</div>
                <h4 className="font-bold text-gray-800 text-base mb-2">{h.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;
