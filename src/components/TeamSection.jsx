import React from 'react';
import { User, Code, Palette, Settings, TrendingUp, Star } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "정동열",
      position: "CEO",
      role: "AI 기획/개발",
      icon: <Star className="w-8 h-8" style={{ color: '#f59e0b' }} />,
      description: "AI 기반 솔루션 기획 및 개발 총괄",
      color: "from-amber-50 to-yellow-50",
  avatar: "/images/image-68.jpg"
    },
    {
      name: "김개발",
      position: "Developer",
      role: "기술 개발",
      icon: <Code className="w-8 h-8" style={{ color: '#3b82f6' }} />,
      description: "프론트엔드/백엔드 개발 및 시스템 구축",
      color: "from-blue-50 to-indigo-50",
  avatar: "/images/image-31.jpg"
    },
    {
      name: "박디자인",
      position: "Designer",
      role: "UI/UX 디자인",
      icon: <Palette className="w-8 h-8" style={{ color: '#ec4899' }} />,
      description: "사용자 경험 설계 및 인터페이스 디자인",
      color: "from-pink-50 to-rose-50",
  avatar: "/images/image-04.jpg"
    },
    {
      name: "이자동화",
      position: "Automation Planner",
      role: "RPA 기획",
      icon: <Settings className="w-8 h-8" style={{ color: '#6b7280' }} />,
      description: "업무 자동화 프로세스 설계 및 최적화",
      color: "from-gray-50 to-slate-50",
  avatar: "/images/image-09.jpg"
    },
    {
      name: "최마케팅",
      position: "Marketing",
      role: "마케팅/영업",
      icon: <TrendingUp className="w-8 h-8" style={{ color: '#059669' }} />,
      description: "시장 분석 및 고객 관계 관리",
      color: "from-emerald-50 to-green-50",
  avatar: "/images/image-76.jpg"
    }
  ];

  return (
    <section 
      id="team" 
      className="py-24 min-h-[80vh] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-24 h-24 bg-purple-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-xl"></div>
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
              Our Team
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
            전문가 팀
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
            각 분야의 전문성을 갖춘 바이칼시스템즈의 핵심 인재들
          </p>
        </div>

        {/* 팀 멤버 카드들 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-12 px-4 sm:px-0">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}
            >
              {/* 아바타 이미지 */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src={member.avatar}
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-full object-cover"
                      style={{ 
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      onError={(e) => {
                        // 이미지 로딩 실패 시 색상 fallback
                        const colors = ['#3b82f6', '#f59e0b', '#ec4899', '#6b7280', '#059669'];
                        const color = colors[index % colors.length];
                        e.target.outerHTML = `<div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, ${color}, ${color}88)"><span style="color: white; font-size: clamp(16px, 4vw, 24px); font-weight: bold;">${member.name.charAt(0)}</span></div>`;
                      }}
                    />
                  </div>
                  {/* 온라인 상태 표시 */}
                  <div 
                    className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-3 sm:border-4 border-white flex items-center justify-center shadow-lg"
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '0.25rem',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  {member.name}
                </h3>
                
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#3b82f6',
                  marginBottom: '0.5rem',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  {member.position}
                </p>
                
                <p style={{
                  fontSize: '13px',
                  color: '#64748b',
                  marginBottom: '1rem',
                  fontWeight: '500',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  {member.role}
                </p>
                
                <p style={{
                  fontSize: '12px',
                  color: '#64748b',
                  lineHeight: '1.5',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 팀 소개 카드 */}
        <div className="flex justify-center">
          <div 
            className="rounded-2xl p-8 max-w-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '1rem',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              함께 성장하는 전문가 팀
            </h3>
            
            <p style={{
              fontSize: '1rem',
              color: '#64748b',
              marginBottom: '1.5rem',
              lineHeight: '1.6',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              각자의 전문 분야에서 뛰어난 역량을 가진 팀원이 모여<br />
              AI+RPA+공공데이터를 활용한 혁신적인 자동화 솔루션을 개발하고 있습니다.
            </p>
            
            {/* 팀 통계 */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#3b82f6',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  5명
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#64748b',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  전문가 구성원
                </div>
              </div>
              <div className="text-center">
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#059669',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  100%
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#64748b',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  협업 완성도
                </div>
              </div>
              <div className="text-center">
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#7c3aed',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  24/7
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#64748b',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  팀워크
                </div>
              </div>
            </div>
            
            <div style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#3b82f6',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              🚀 함께 성장하는 바이칼시스템즈 팀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
