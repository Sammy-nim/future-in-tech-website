import React from 'react';
import { Award, ShieldCheck, Zap, Layers, Server, Shield, Database } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      id: 'hpe',
      name: 'Hewlett Packard Enterprise',
      nameEn: 'HPE Official Partner',
      tier: 'Enterprise Solution Partner',
      tag: 'Server · Storage · Cloud',
      tagColor: 'bg-[#e0f2f1] text-[#01A982] border-[#01A982]/30',
      accentColor: 'border-t-[#01A982]',
      icon: <Server className="w-5 h-5 text-[#01A982]" />,
      description: 'HPE ProLiant 서버, Alletra 스토리지, GreenLake 하이브리드 클라우드 및 미션 크리티컬 엔터프라이즈 인프라 공급 및 기술 지원',
      logo: (
        <a
          href="https://www.hpe.com/kr/ko/home.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 cursor-pointer transition-transform hover:scale-[1.02]"
          title="Hewlett Packard Enterprise 공식 웹사이트 바로가기"
        >
          <div className="w-11 h-11 rounded-xl bg-[#01A982] flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-sm flex-shrink-0 group-hover:bg-[#009371] transition-colors">
            HPE
          </div>
          <div className="flex flex-col text-left">
            <span className="text-lg font-black tracking-tight text-gray-900 group-hover:text-[#01A982] transition-colors">Hewlett Packard Enterprise</span>
            <span className="text-[11px] font-semibold text-[#01A982] tracking-wider">HPE Official Partner</span>
          </div>
        </a>
      ),
    },
    {
      id: 'arraynetworks',
      name: '(주)어레이네트웍스코리아',
      nameEn: 'Array Networks Korea',
      tier: 'Security & Infrastructure Partner',
      tag: 'Zero Trust · Out-of-Band',
      tagColor: 'bg-[#e3f2fd] text-[#005B94] border-[#005B94]/30',
      accentColor: 'border-t-[#005B94]',
      icon: <Shield className="w-5 h-5 text-[#005B94]" />,
      description: '제로트러스트네트웍 인프라 및 OUT-OF-BAND 인프라 관리 솔루션 파트너로서 고보안 네트워킹 및 원격 인프라 관리 제공',
      logo: (
        <a
          href="https://www.arraynetwork.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 cursor-pointer transition-transform hover:scale-[1.02]"
          title="(주)어레이네트웍스코리아 공식 웹사이트 바로가기"
        >
          <div className="w-11 h-11 rounded-xl bg-[#004B87] flex items-center justify-center text-white font-black text-sm tracking-wider shadow-sm flex-shrink-0 border border-[#003B6B] group-hover:border-[#0070BA] transition-colors">
            ANK
          </div>
          <div className="flex flex-col text-left">
            <span className="text-lg font-black tracking-tight text-gray-900 group-hover:text-[#004B87] transition-colors">(주)어레이네트웍스코리아</span>
            <span className="text-[11px] font-semibold text-[#004B87] tracking-wider">ANK Official Partner</span>
          </div>
        </a>
      ),
    },
    {
      id: 'qumulo',
      name: 'Qumulo',
      nameEn: 'Qumulo Official Partner',
      tier: 'Scale-Out File Data Platform',
      tag: 'Scale-Out NAS · Hybrid Cloud',
      tagColor: 'bg-[#e6faf8] text-[#00A896] border-[#00A896]/30',
      accentColor: 'border-t-[#00A896]',
      icon: <Database className="w-5 h-5 text-[#00A896]" />,
      description: '엔터프라이즈 스케일아웃(Scale-out) 파일 스토리지 및 하이브리드 클라우드 환경의 대규모 비정형 데이터 관리 플랫폼 솔루션 파트너',
      logo: (
        <a
          href="https://qumulo.com/ko/product/core"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 cursor-pointer transition-transform hover:scale-[1.02]"
          title="Qumulo 공식 제품 페이지 바로가기"
        >
          <div className="w-11 h-11 rounded-xl bg-[#1B1440] flex items-center justify-center shadow-sm flex-shrink-0 border border-[#2D2260] group-hover:border-[#00D4B2] transition-colors">
            <svg className="w-7 h-7" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Qumulo Q Ring */}
              <circle cx="16" cy="16" r="10.5" stroke="#00D4B2" strokeWidth="3.8" />
              {/* Qumulo Accent Dot/Tail at 4 o'clock */}
              <circle cx="25" cy="25" r="3.2" fill="#00D4B2" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-lg font-black tracking-tight text-gray-900 flex items-center gap-1.5 group-hover:text-[#00A896] transition-colors">
              Qumulo
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D4B2] mb-1"></span>
            </span>
            <span className="text-[11px] font-semibold text-[#00A896] tracking-wider">Scale-Out File Data Platform</span>
          </div>
        </a>
      ),
    },
  ];

  const strengths = [
    {
      icon: <Award className="w-6 h-6 text-[#01A982]" />,
      title: '공식 파트너십 인증',
      desc: '글로벌 벤더의 엄격한 기술 및 서비스 역량 평가를 통과한 공식 파트너',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#01A982]" />,
      title: '공인 엔지니어 역량',
      desc: '벤더 공인 자격증 및 전문 구축 경험을 보유한 전문 엔지니어 상주',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#01A982]" />,
      title: '벤더 직결 신속 지원',
      desc: '글로벌 벤더 본사 기술지원 라인과 직결된 최단시간 장애 대응 및 부품 공급 체계',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#01A982]" />,
      title: '통합 인프라 아키텍처',
      desc: '서버, 스토리지, 보안 및 대용량 비정형 데이터를 유기적으로 결합한 엔드투엔드 솔루션',
    },
  ];

  return (
    <div className="bg-white w-full py-24 border-t border-gray-100">
      <section id="partners" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#006064] mb-4">Partners</h2>
          <p className="text-gray-500 text-lg">
            (주)퓨처인테크는 글로벌 선도 솔루션 파트너들과의 공고한 협력을 통해 검증된 기술력과 최적의 엔터프라이즈 솔루션을 제공합니다.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#01A982] uppercase tracking-widest">
              Strategic Solution Partners
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              주요 파트너사
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-[#f8fdfe] rounded-2xl p-7 border border-[#e1f5fe] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${partner.tagColor}`}>
                      {partner.tier}
                    </span>
                    <span className="text-gray-400">
                      {partner.icon}
                    </span>
                  </div>

                  <div className="py-2 flex items-center justify-start mb-4">
                    {partner.logo}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">Domain</span>
                  <span className="text-xs font-bold text-gray-700">{partner.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Value Banner */}
        <div className="bg-[#f8fdfe] rounded-3xl p-8 md:p-12 border border-[#e1f5fe] shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#01A982] uppercase tracking-widest">
              PARTNERSHIP STRENGTHS
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              파트너십 기반의 기술 경쟁력
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
                <div className="p-3 bg-[#e0f2f1] rounded-xl mb-4">
                  {strength.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-base mb-2">{strength.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
