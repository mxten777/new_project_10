import React from 'react';
import { Bot, Database, Zap, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" style={{ color: '#2563eb' }} />,
      title: "AI 기반 업무 자동화",
      description: "RPA 기술을 활용한 반복 업무의 완전 자동화",
      features: ["문서 처리 자동화", "데이터 입력 자동화", "워크플로우 최적화"],
      color: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Database className="w-8 h-8" style={{ color: '#7c3aed' }} />,
      title: "공공데이터 API 활용",
      description: "정부 오픈 데이터를 활용한 맞춤형 서비스",
      features: ["실시간 데이터 연동", "API 통합 관리", "맞춤형 대시보드"],
      color: "from-purple-50 to-blue-50"
    },
    {
      icon: <Zap className="w-8 h-8" style={{ color: '#059669' }} />,
      title: "MCP 연동 서비스",
      description: "Model Context Protocol을 통한 AI 모델 통합",
      features: ["다중 AI 모델 연동", "컨텍스트 공유", "성능 최적화"],
      color: "from-emerald-50 to-teal-50"
    }
  ];

  return (
    <section id="services" className="py-24" 
             style={{
               background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)',
               fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
             }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* 헤더 섹션 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '500', 
              color: '#1e40af',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              핵심 서비스
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#1e293b',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            바이브코딩 기반 AI 솔루션
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            fontWeight: '500',
            color: '#475569',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.7',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            AI 자동화와 공공데이터를 활용한 혁신적인 비즈니스 솔루션으로<br />
            디지털 전환을 가속화합니다
          </p>
        </div>

        {/* 서비스 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer`}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}
            >
              {/* 아이콘 배경 */}
              <div className="flex justify-center mb-6">
                <div 
                  className="p-4 rounded-xl"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)' :
                               index === 1 ? 'linear-gradient(135deg, #f3e8ff 0%, #dbeafe 100%)' :
                               'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)'
                  }}
                >
                  {service.icon}
                </div>
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1rem',
                textAlign: 'center',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                {service.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                marginBottom: '2rem',
                lineHeight: '1.6',
                textAlign: 'center',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span style={{
                      fontSize: '14px',
                      color: '#475569',
                      fontWeight: '500',
                      fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                    }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* MVP 쇼케이스 */}
        <div 
          className="relative p-12 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1d4ed8 100%)',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}
        >
          {/* 배경 장식 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            {/* 상태 표시 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#ffffff',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                실시간 운영중
              </span>
            </div>
            
            <h3 style={{
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              실제 구현된 MVP 프로젝트
            </h3>
            
            <p style={{
              fontSize: '1.125rem',
              color: '#e2e8f0',
              marginBottom: '3rem',
              maxWidth: '36rem',
              margin: '0 auto 3rem auto',
              lineHeight: '1.7',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              바이브코딩으로 완성한 실제 운영 중인 솔루션을 직접 체험해보세요
            </p>
            
            {/* 기술 스택 태그 */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['React', 'Vite', 'Firebase', 'Vercel'].map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href="https://new-project-03-mgsevdi1l-dongyeol-jungs-projects.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                background: '#ffffff',
                color: '#1e40af',
                fontSize: '16px',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
              }}
            >
              <span>라이브 데모 보기</span>
              <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
