import React from 'react';
import { Database, Cog, Smartphone, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="text-blue-500" size={32} />,
      title: "AI + 공공데이터 서비스 기획 및 개발",
      description: "정부 오픈데이터와 AI 기술을 결합하여 공공서비스의 효율성을 높이는 맞춤형 솔루션을 기획하고 개발합니다.",
      cases: ["실시간 날씨·재해 정보 알림 시스템", "지역 상권 분석 및 추천 플랫폼", "공공시설 이용현황 대시보드"]
    },
    {
      icon: <Cog className="text-blue-500" size={32} />,
      title: "반복업무 자동화를 위한 RPA 솔루션",
      description: "반복적이고 단순한 업무를 자동화하여 업무 효율성을 극대화하고 인적 오류를 최소화하는 RPA 솔루션을 제공합니다.",
      cases: ["문서 자동 분류 및 처리", "데이터 입력 및 검증 자동화", "보고서 생성 및 배포 시스템"]
    },
    {
      icon: <Smartphone className="text-blue-500" size={32} />,
      title: "유아/의료/생활 업종의 스마트 플랫폼 MVP 개발",
      description: "유아교육, 의료서비스, 생활편의 분야에 특화된 스마트 플랫폼 MVP를 빠르게 개발하여 시장 검증을 지원합니다.",
      cases: ["어린이집 통합 관리 플랫폼", "병원 예약 및 진료 관리 시스템", "생활 서비스 통합 예약 플랫폼"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Services
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            바이브코딩을 통해 구현한 AI 솔루션으로 
            비즈니스를 혁신합니다
          </p>
        </div>

        {/* 서비스 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-blue-700 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <div className="mt-auto">
                <h4 className="text-lg font-semibold text-blue-900 mb-3 text-center">관련 사례</h4>
                <ul className="space-y-2">
                  {service.cases.map((caseItem, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-blue-600">
                      <ChevronRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{caseItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
