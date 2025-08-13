import React from 'react';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" style={{ color: '#3b82f6' }} />,
      title: "Email",
      info: "jngdy@naver.com",
      description: "업무 문의 및 제휴 제안"
    },
    {
      icon: <Phone className="w-6 h-6" style={{ color: '#059669' }} />,
      title: "Phone",
      info: "010-2380-4691",
      description: "평일 09:00-18:00"
    },
    {
      icon: <MapPin className="w-6 h-6" style={{ color: '#7c3aed' }} />,
      title: "Location",
      info: "서울특별시 강남구 역삼로 138",
      description: "방문 상담 가능"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 min-h-[80vh] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-20 w-24 h-24 bg-green-100 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-24 right-20 w-32 h-32 bg-purple-100 rounded-full opacity-40 blur-xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
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
              Contact
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
            문의하기
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: '500',
            color: '#475569',
            marginBottom: '0.5rem',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            제휴 제안, 개발 문의를 기다립니다
          </p>
          
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            바이칼시스템즈의 AI+RPA+공공데이터 솔루션에 대해 궁금한 점이 있으시면 언제든 연락주세요
          </p>
        </div>

        {/* 연락처 정보 카드 */}
        <div className="flex justify-center">
          <div 
            className="rounded-2xl p-10 w-full max-w-3xl"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '2rem',
              textAlign: 'center',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              연락처 정보
            </h3>
            
            {/* 연락처 정보들 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl"
                     style={{
                       background: idx === 0 ? 'rgba(59, 130, 246, 0.05)' :
                                  idx === 1 ? 'rgba(5, 150, 105, 0.05)' :
                                  'rgba(124, 58, 237, 0.05)'
                     }}>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: idx === 0 ? 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)' :
                                 idx === 1 ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' :
                                 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)'
                    }}
                  >
                    {contact.icon}
                  </div>
                  
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '0.5rem',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                  }}>
                    {contact.title}
                  </h4>
                  
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#3b82f6',
                    marginBottom: '0.5rem',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                  }}>
                    {contact.info}
                  </p>
                  
                  <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                  }}>
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* 서비스 소개서 다운로드 */}
            <div 
              className="pt-8 mt-8 text-center"
              style={{ borderTop: '1px solid #e2e8f0' }}
            >
              <a 
                href="#" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <FileText className="w-5 h-5" />
                서비스 소개서 다운로드
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
