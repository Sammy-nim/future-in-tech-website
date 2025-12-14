import React from 'react';
import { ExternalLink } from 'lucide-react';

const Products: React.FC = () => {
  const hpeSolutions = [
    {
      title: 'AI',
      url: 'https://www.hpe.com/kr/ko/solutions/artificial-intelligence/nvidia-collaboration.html',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
      desc: 'HPE의 엔드투엔드 AI 솔루션과 NVIDIA 협업 플랫폼을 통해 데이터 중심 혁신을 가속화합니다. 머신러닝 모델 학습부터 추론까지, 확장 가능한 인프라로 비즈니스 인사이트를 신속하게 도출하세요.',
    },
    {
      title: '프라이빗 클라우드',
      url: 'https://www.hpe.com/kr/ko/private-cloud-solutions.html',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      desc: 'HPE GreenLake는 온프레미스 환경에서 클라우드의 민첩성과 경제성을 제공하는 서비스형(aaS) 플랫폼입니다. 데이터 보안과 제어권을 유지하면서도 퍼블릭 클라우드와 같은 유연한 확장성을 경험해보세요.',
    },
    {
      title: '슈퍼컴퓨팅',
      url: 'https://www.hpe.com/kr/ko/supercomputing.html',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      desc: 'HPE Cray 슈퍼컴퓨팅 기술은 복잡한 시뮬레이션과 대규모 AI 워크로드를 초고속으로 처리합니다. 과학 연구, 기상 예측, 신약 개발 등 고성능 연산이 필요한 분야에서 획기적인 성과를 지원합니다.',
    },
    {
      title: '컴퓨팅',
      url: 'https://www.hpe.com/kr/ko/compute.html',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=600&q=80',
      desc: 'HPE ProLiant 서버는 워크로드에 최적화된 성능과 보안을 제공하는 업계 최고의 서버 포트폴리오입니다. 자동화된 관리 기능과 강력한 보안 기술을 통해 IT 인프라 운영의 효율성을 극대화하세요.',
    },
    {
      title: '스토리지',
      url: 'https://www.hpe.com/kr/ko/storage.html',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      desc: 'HPE Alletra는 데이터의 복잡성을 제거하고 관리를 간소화하는 클라우드 네이티브 데이터 인프라입니다. AI 기반의 예측 관리와 무중단 가용성을 통해 데이터의 잠재력을 최대한 이끌어냅니다.',
    },
    {
      title: '네트워킹',
      url: 'https://www.hpe.com/kr/ko/networking.html',
      image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=600&q=80',
      desc: 'HPE Aruba Networking은 엣지에서 데이터센터, 클라우드까지 아우르는 안전하고 스마트한 연결을 제공합니다. AI 기반의 자동화와 강력한 보안 정책을 통해 네트워크 관리를 단순화하세요.',
    },
    {
      title: '소프트웨어',
      url: 'https://www.hpe.com/kr/ko/software.html',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
      desc: 'HPE Ezmeral 소프트웨어 포트폴리오는 하이브리드 멀티클라우드 환경에서 데이터와 애플리케이션을 현대화합니다. 컨테이너 오케스트레이션과 데이터 분석을 통해 디지털 트랜스포메이션을 가속화하세요.',
    },
    {
      title: '서비스',
      url: 'https://www.hpe.com/kr/ko/services.html',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
      desc: 'HPE Services는 IT 운영 혁신과 디지털 트랜스포메이션의 전 과정을 지원하는 전문가 서비스입니다. 전략 컨설팅부터 구현, 운영 관리까지 맞춤형 솔루션을 제공하여 비즈니스 목표 달성을 돕습니다.',
    },
  ];

  return (
    <section id="product" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#006064] mb-4">HPE Business Solutions</h2>
        <p className="text-gray-500 text-lg">HPE의 혁신적인 기술과 솔루션을 만나보세요.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {hpeSolutions.map((item, index) => (
          <div 
            key={index} 
            className="group border-b last:border-0 border-gray-100 hover:bg-cyan-50/30 transition-colors duration-200"
          >
            <div className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8">
              {/* Image Column */}
              <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title Column */}
              <div className="w-full md:w-1/5 flex-shrink-0 text-left">
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-[#00838f] transition-colors"
                >
                  {item.title}
                  <ExternalLink size={18} className="text-[#00838f] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Description Column */}
              <div className="flex-1 text-left">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;