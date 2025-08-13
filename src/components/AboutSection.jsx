import React from 'react';
import { Mail, Phone, Globe, Users, Target, Zap, Award, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-32 min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* 회사 소개 헤더 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '500', 
              color: '#1e40af',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              About Baikal Systems
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            color: '#1e293b',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            About <span style={{ color: '#3b82f6' }}>Us</span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <h3 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '1rem',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              (주)바이칼시스템즈
            </h3>
            
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              fontWeight: '600',
              color: '#475569',
              marginBottom: '2rem',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              Vibe Coding 기반 스마트 자동화 플랫폼 기업
            </p>
            
            <div 
              className="rounded-2xl p-8 mt-8"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <p style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                color: '#1e293b',
                lineHeight: '1.4',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                "실제 필요한 것을 빠르게 자동화하는<br className="hidden sm:block"/>
                <span style={{ color: '#3b82f6' }}>기술집약형 개발사</span>"
              </p>
            </div>
          </div>
        </div>
        {/* 핵심 정보 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* 구성원 카드 */}
          <div className="group relative">
            <div 
              className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                minHeight: '320px'
              }}
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}
                >
                  <Users className="text-white" size={32} />
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
                팀 구성
              </h3>
              
              <p style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#3b82f6',
                marginBottom: '0.5rem',
                textAlign: 'center',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                4명
              </p>
              
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontWeight: '500',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                전문가 구성원
              </p>
              
              <div 
                className="pt-4 mt-auto"
                style={{ borderTop: '1px solid #e2e8f0' }}
              >
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  textAlign: 'center',
                  lineHeight: '1.5',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  각 분야 전문성을 갖춘<br/>핵심 인재들로 구성
                </p>
              </div>
            </div>
          </div>
          
          {/* 비전 카드 */}
          <div className="group relative">
            <div 
              className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                minHeight: '320px'
              }}
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
                >
                  <Target className="text-white" size={32} />
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
                비전
              </h3>
              
              <p style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#7c3aed',
                marginBottom: '0.5rem',
                textAlign: 'center',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                스마트 자동화
              </p>
              
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontWeight: '500',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                플랫폼 기업
              </p>
              
              <div 
                className="pt-4 mt-auto"
                style={{ borderTop: '1px solid #e2e8f0' }}
              >
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  textAlign: 'center',
                  lineHeight: '1.5',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  미래 지향적 기술로<br/>업무 혁신을 선도
                </p>
              </div>
            </div>
          </div>
          
          {/* 핵심 기술 카드 */}
          <div className="group relative">
            <div 
              className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                minHeight: '320px'
              }}
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
                >
                  <Zap className="text-white" size={32} />
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
                핵심 기술
              </h3>
              
              <p style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#059669',
                marginBottom: '0.5rem',
                textAlign: 'center',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                Vibe Coding
              </p>
              
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontWeight: '500',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                AI + RPA + 공공데이터
              </p>
              
              <div 
                className="pt-4 mt-auto"
                style={{ borderTop: '1px solid #e2e8f0' }}
              >
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  textAlign: 'center',
                  lineHeight: '1.5',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  혁신적 개발 방법론과<br/>최첨단 기술 융합
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 회사 실적 및 강점 카드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* 회사 강점 카드 */}
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}
          >
            <div className="flex items-center mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)' }}
              >
                <Award className="text-white" size={24} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                회사 강점
              </h3>
            </div>
            <div className="space-y-4">
              {[
                "실무 중심의 실용적 솔루션 개발",
                "빠른 프로토타이핑과 MVP 검증",
                "공공데이터 활용 전문성",
                "AI 기반 업무 자동화 노하우"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                    style={{ backgroundColor: '#3b82f6' }}
                  ></div>
                  <p style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    fontWeight: '500',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 서비스 영역 카드 */}
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}
          >
            <div className="flex items-center mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                style={{ background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)' }}
              >
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                서비스 영역
              </h3>
            </div>
            <div className="space-y-4">
              {[
                "공공기관 업무 자동화",
                "민간기업 디지털 전환",
                "업종별 맞춤 솔루션",
                "AI+RPA 통합 플랫폼"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                    style={{ backgroundColor: '#7c3aed' }}
                  ></div>
                  <p style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    fontWeight: '500',
                    lineHeight: '1.6',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 대표 정보 카드 */}
        <div className="flex justify-center">
          <div className="group relative max-w-2xl w-full">
            <div 
              className="p-12 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}
            >
              {/* 대표 아바타 */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div 
                    className="w-24 h-24 rounded-full p-1"
                    style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 50%, #ec4899 100%)' }}
                  >
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(124,58,237,0.2) 100%)' }}
                    >
                      <div 
                        className="w-12 h-12 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)' }}
                      ></div>
                    </div>
                  </div>
                  <div 
                    className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                    style={{ border: '4px solid #ffffff' }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-blue-50 rounded-full">
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#3b82f6',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                  }}>
                    CEO & Founder
                  </span>
                </div>
                
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  (주)바이칼시스템즈
                </h4>
                
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#1e293b',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  정동열 <span style={{ color: '#3b82f6', fontSize: '1.25rem', fontWeight: '700' }}>CEO</span>
                </h3>
                
                <div 
                  className="rounded-xl p-6 space-y-4"
                  style={{ background: 'rgba(248, 250, 252, 0.5)' }}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Phone size={20} style={{ color: 'rgba(59, 130, 246, 0.7)' }} />
                    <span style={{
                      fontSize: '1rem',
                      color: '#64748b',
                      fontWeight: '500',
                      fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                    }}>
                      010-2380-4691
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-3">
                    <Mail size={20} style={{ color: 'rgba(59, 130, 246, 0.7)' }} />
                    <span style={{
                      fontSize: '1rem',
                      color: '#64748b',
                      fontWeight: '500',
                      fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                    }}>
                      jngdy@naver.com
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-3">
                    <Globe size={20} style={{ color: 'rgba(59, 130, 246, 0.7)' }} />
                    <a 
                      href="https://www.baikalsys.kr" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="underline transition-colors"
                      style={{
                        fontSize: '1rem',
                        color: '#64748b',
                        fontWeight: '500',
                        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                      onMouseLeave={(e) => e.target.style.color = '#64748b'}
                    >
                      www.baikalsys.kr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
