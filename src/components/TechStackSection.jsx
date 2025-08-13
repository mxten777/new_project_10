import React from 'react';
import { Code, Database, Bot, Globe, Zap } from 'lucide-react';

const TechStackSection = () => {
  const techStack = [
    {
      name: "React",
      icon: <Code className="w-8 h-8" style={{ color: '#61dafb' }} />,
      description: "모던 프론트엔드 라이브러리",
      color: "from-blue-50 to-cyan-50"
    },
    {
      name: "Firebase",
      icon: <Database className="w-8 h-8" style={{ color: '#ff9800' }} />,
      description: "실시간 백엔드 서비스",
      color: "from-orange-50 to-yellow-50"
    },
    {
      name: "Vercel",
      icon: <Globe className="w-8 h-8" style={{ color: '#000000' }} />,
      description: "고성능 배포 플랫폼",
      color: "from-gray-50 to-slate-50"
    },
    {
      name: "Vibe Coding",
      icon: <Zap className="w-8 h-8" style={{ color: '#7c3aed' }} />,
      description: "혁신적인 개발 방법론",
      color: "from-purple-50 to-indigo-50"
    },
    {
      name: "MCP",
      icon: <Bot className="w-8 h-8" style={{ color: '#059669' }} />,
      description: "모델 컨텍스트 프로토콜",
      color: "from-emerald-50 to-green-50"
    }
  ];

  return (
    <section 
      id="techstack" 
      className="py-24 min-h-[80vh] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-indigo-100 rounded-full opacity-40 blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '500', 
              color: '#1e40af',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              Tech Stack
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            color: '#1e293b',
            marginBottom: '1rem',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            핵심 기술 스택
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: '500',
            color: '#475569',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.7',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            바이칼시스템즈가 사용하는 검증된 최신 기술들
          </p>
        </div>

        {/* 기술 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}
            >
              {/* 아이콘 배경 */}
              <div className="flex justify-center mb-4">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #dbeafe 0%, #cffafe 100%)' :
                               index === 1 ? 'linear-gradient(135deg, #fed7aa 0%, #fef3c7 100%)' :
                               index === 2 ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' :
                               index === 3 ? 'linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%)' :
                               'linear-gradient(135deg, #d1fae5 0%, #dcfce7 100%)'
                  }}
                >
                  {tech.icon}
                </div>
              </div>
              
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '0.5rem',
                textAlign: 'center',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                {tech.name}
              </h3>
              
              <p style={{
                fontSize: '14px',
                color: '#64748b',
                textAlign: 'center',
                lineHeight: '1.5',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
