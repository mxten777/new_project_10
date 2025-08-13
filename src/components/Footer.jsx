import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
      marginTop: '4rem',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* 상단 구분선 */}
        <div 
          className="w-24 h-1 mx-auto mb-12 rounded-full"
          style={{ background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)' }}
        ></div>
        
        {/* 메인 콘텐츠 */}
        <div className="text-center mb-12">
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '0.75rem',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            (주) 바이칼시스템즈
          </h3>
          
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            marginBottom: '2rem',
            fontWeight: '500',
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
          }}>
            바이브코딩 기반 AI+RPA+공공데이터 활용 솔루션
          </p>
          
          {/* 연락처 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg"
                 style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
              <Mail className="w-5 h-5" style={{ color: '#3b82f6' }} />
              <span style={{
                fontSize: '14px',
                color: '#475569',
                fontWeight: '500',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                jngdy@baikalsys.kr
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg"
                 style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
              <Phone className="w-5 h-5" style={{ color: '#3b82f6' }} />
              <span style={{
                fontSize: '14px',
                color: '#475569',
                fontWeight: '500',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                010-2380-4691
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg"
                 style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
              <MapPin className="w-5 h-5" style={{ color: '#3b82f6' }} />
              <span style={{
                fontSize: '14px',
                color: '#475569',
                fontWeight: '500',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                서울특별시 강남구 역삼로 138
              </span>
            </div>
          </div>
        </div>
        
        {/* 구분선 */}
        <div className="w-full h-px bg-gray-200 mb-8"></div>
        
        {/* 하단 정보 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 text-center md:text-left">
            <span style={{
              fontSize: '13px',
              color: '#64748b',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              © 2024 (주) 바이칼시스템즈
            </span>
            <span style={{
              fontSize: '13px',
              color: '#64748b',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              사업자등록: 215-86-47300
            </span>
            <span style={{
              fontSize: '13px',
              color: '#64748b',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              대표: 정동열
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" style={{ color: '#3b82f6' }} />
            <span style={{
              fontSize: '12px',
              color: '#64748b',
              fontWeight: '500',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}>
              Powered by Vibe Coding
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
