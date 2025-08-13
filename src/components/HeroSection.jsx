import React from 'react';
import { ArrowRight, Sparkles, Rocket, Star, Zap, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      {/* CSS 키프레임 애니메이션 */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(2deg); }
          66% { transform: translateY(15px) rotate(-1deg); }
        }
        
        @keyframes rocket-fly {
          0% { transform: translateX(-100px) translateY(50px) rotate(-45deg); }
          25% { transform: translateX(200px) translateY(-30px) rotate(-30deg); }
          50% { transform: translateX(500px) translateY(20px) rotate(-60deg); }
          75% { transform: translateX(800px) translateY(-40px) rotate(-45deg); }
          100% { transform: translateX(1200px) translateY(30px) rotate(-30deg); }
        }
        
        @keyframes meteor {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-300px) translateY(200px); opacity: 0; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen py-32 overflow-hidden" 
               style={{
                 fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                 background: 'linear-gradient(135deg, #0f0f23 0%, #1a1b3e 25%, #2d1b69 50%, #1a1b3e 75%, #0f0f23 100%)'
               }}>
        
        {/* 배경 오버레이 */}
        <div className="absolute inset-0 z-0" style={{
          background: 'linear-gradient(180deg, rgba(15, 15, 35, 0.7) 0%, rgba(26, 27, 62, 0.8) 25%, rgba(45, 27, 105, 0.9) 50%, rgba(26, 27, 62, 0.8) 75%, rgba(15, 15, 35, 0.7) 100%)'
        }}></div>
        
        {/* 동적 우주 요소들 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
          {/* 떠다니는 행성들 */}
          <div 
            className="absolute top-16 left-16 w-24 h-24 rounded-full opacity-70"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6, #1e40af)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), inset -8px -8px 20px rgba(0,0,0,0.3)',
              animation: 'float 12s ease-in-out infinite'
            }}
          >
            {/* 행성 고리 */}
            <div 
              className="absolute top-1/2 left-1/2 w-32 h-2 rounded-full opacity-60"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.6) 20%, rgba(59, 130, 246, 0.8) 50%, rgba(59, 130, 246, 0.6) 80%, transparent 100%)',
                transform: 'translate(-50%, -50%) rotate(-15deg)'
              }}
            ></div>
          </div>
          
          <div 
            className="absolute bottom-24 right-20 w-16 h-16 rounded-full opacity-60"
            style={{
              background: 'radial-gradient(circle at 40% 40%, #a855f7, #7c3aed, #581c87)',
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.4), inset -6px -6px 15px rgba(0,0,0,0.4)',
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          ></div>
          
          <div 
            className="absolute top-32 right-32 w-12 h-12 rounded-full opacity-50"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #34d399, #10b981, #047857)',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)',
              animation: 'float 10s ease-in-out infinite'
            }}
          ></div>
          
          {/* 우주선/로켓 */}
          <div 
            className="absolute top-1/4 left-1/4 opacity-40"
            style={{ animation: 'rocket-fly 20s linear infinite' }}
          >
            <Rocket 
              size={32} 
              style={{ 
                color: '#60a5fa',
                filter: 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.6))',
                transform: 'rotate(-45deg)'
              }} 
            />
          </div>
          
          {/* 유성 효과 */}
          <div 
            className="absolute top-20 right-40 w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              boxShadow: '0 0 6px 2px rgba(255,255,255,0.8)',
              animation: 'meteor 3s linear infinite'
            }}
          ></div>
          
          {/* 펄싱 별들 */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-70"
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${10 + (i * 12)}%`,
                animation: `pulse ${2 + (i * 0.5)}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: '0 0 8px rgba(255,255,255,0.8)'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
          
          {/* 메인 로고 - BAIKAL.AI */}
          <div className="mb-8" style={{ marginBottom: '2rem' }}>
            <div 
              className="mx-auto transition-all duration-300 hover:scale-105 inline-block"
              style={{
                maxWidth: 'min(450px, 85vw)',
                filter: 'drop-shadow(0 8px 32px rgba(96, 165, 250, 0.4)) drop-shadow(0 0 20px rgba(124, 58, 237, 0.3))',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '2rem'
              }}
            >
              {/* 첫 번째 줄: 컬러 도형들 */}
              <div style={{ 
                display: 'flex', 
                gap: '0.75rem', 
                marginBottom: '1rem',
                justifyContent: 'flex-start'
              }}>
                <div style={{ 
                  width: 'clamp(28px, 5vw, 36px)', 
                  height: 'clamp(28px, 5vw, 36px)', 
                  borderRadius: '50%', 
                  background: '#3b82f6' 
                }}></div>
                <div style={{ 
                  width: 'clamp(28px, 5vw, 36px)', 
                  height: 'clamp(28px, 5vw, 36px)', 
                  borderRadius: '6px', 
                  background: '#10b981' 
                }}></div>
                <div style={{ 
                  width: 'clamp(28px, 5vw, 36px)', 
                  height: 'clamp(28px, 5vw, 36px)', 
                  background: '#f59e0b',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}></div>
                <div style={{ 
                  width: 'clamp(28px, 5vw, 36px)', 
                  height: 'clamp(28px, 5vw, 36px)', 
                  background: '#fbbf24',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                }}></div>
              </div>
              
              {/* 두 번째 줄: BAIKAL (큰 글씨) */}
              <div style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(2.5rem, 7vw, 4rem)',
                fontWeight: '900',
                lineHeight: '0.9',
                letterSpacing: '-0.02em',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                textAlign: 'left',
                marginBottom: '0.5rem'
              }}>
                BAIKAL.AI
              </div>
              
              {/* 세 번째 줄: vibe coding (작은 글씨) */}
              <div style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                color: '#94a3b8',
                fontWeight: '500',
                letterSpacing: '0.15em',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                textAlign: 'left'
              }}>
                vibe coding
              </div>
            </div>
          </div>

          {/* 서브 타이틀 */}
          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.8rem)',
            fontWeight: '600',
            color: '#cbd5e1',
            marginBottom: '3rem',
            maxWidth: '50rem',
            lineHeight: '1.6',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            🤖 <span style={{ color: '#60a5fa' }}>AI + RPA + 공공데이터</span>로<br />
            <span style={{ color: '#a855f7' }}>업무 자동화</span>를 현실로 만드는 
            <span style={{ color: '#fbbf24' }}> 바이브코딩 플랫폼</span>
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 w-full max-w-lg sm:max-w-none">
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #ec4899 100%)',
                color: '#ffffff',
                fontSize: 'clamp(15px, 3vw, 17px)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4), 0 0 20px rgba(124, 58, 237, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              <span>🚀 자동화 시작하기</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#services" 
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 relative"
              style={{
                background: 'rgba(15, 15, 35, 0.8)',
                color: '#60a5fa',
                border: '2px solid #60a5fa',
                fontSize: 'clamp(15px, 3vw, 17px)',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                boxShadow: '0 10px 40px rgba(15, 15, 35, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
              <span>🌟 서비스 둘러보기</span>
            </a>
          </div>

          {/* 하단 통계 - 완전히 동일한 크기 및 정렬 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center max-w-4xl w-full">
            {[
              {
                icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />,
                number: "4명",
                text: "전문가 구성",
                bgColor: 'rgba(59, 130, 246, 0.12)',
                borderColor: 'rgba(96, 165, 250, 0.4)',
                shadowColor: 'rgba(59, 130, 246, 0.25)',
                textColor: '#60a5fa',
                textShadow: '0 0 25px rgba(96, 165, 250, 0.7)'
              },
              {
                icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />,
                number: "비전",
                text: "스마트 자동화",
                bgColor: 'rgba(124, 58, 237, 0.12)',
                borderColor: 'rgba(168, 85, 247, 0.4)',
                shadowColor: 'rgba(124, 58, 237, 0.25)',
                textColor: '#a855f7',
                textShadow: '0 0 25px rgba(168, 85, 247, 0.7)'
              },
              {
                icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />,
                number: "핵심 기술",
                text: "Vibe Coding",
                bgColor: 'rgba(16, 185, 129, 0.12)',
                borderColor: 'rgba(52, 211, 153, 0.4)',
                shadowColor: 'rgba(16, 185, 129, 0.25)',
                textColor: '#10b981',
                textShadow: '0 0 25px rgba(16, 185, 129, 0.7)'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col justify-center items-center rounded-2xl backdrop-blur-md transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: stat.bgColor,
                  border: `1px solid ${stat.borderColor}`,
                  boxShadow: `0 8px 32px ${stat.shadowColor}`,
                  padding: '1.5rem',
                  height: '180px',
                  width: '100%',
                  maxWidth: '280px',
                  margin: '0 auto'
                }}
              >
                <div className="mb-3">
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: stat.textColor,
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  textShadow: stat.textShadow,
                  marginBottom: '0.5rem',
                  lineHeight: '1.1',
                  textAlign: 'center',
                  minHeight: '2.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: '#cbd5e1',
                  fontWeight: '500',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  lineHeight: '1.2',
                  textAlign: 'center',
                  minHeight: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
