import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: '홈', section: 'hero' },
  { label: '회사소개', section: 'about' },
  { label: '서비스', section: 'services' },
  { label: '기술스택', section: 'techstack' },
  { label: '팀', section: 'team' },
  { label: '문의하기', section: 'contact', cta: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed w-full top-0 z-50 backdrop-blur-md border-b"
      style={{
        background: 'rgba(248, 250, 252, 0.9)',
        borderColor: '#e2e8f0',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          
          {/* 브랜드명 */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}
              >
                <span style={{ 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  fontWeight: '700',
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                }}>
                  B
                </span>
              </div>
              <span style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1e293b',
                letterSpacing: '-0.01em',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
              }}>
                바이칼시스템즈
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) =>
              item.cta ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className="font-medium transition-colors duration-200 hover:scale-105 transform"
                  style={{
                    color: '#64748b',
                    fontSize: '14px',
                    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                  onMouseLeave={(e) => e.target.style.color = '#64748b'}
                >
                  {item.label}
                </button>
              )
            )}
            <ThemeToggle />
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg transition-colors"
              style={{ color: '#64748b' }}
              onMouseEnter={(e) => e.target.style.color = '#1e40af'}
              onMouseLeave={(e) => e.target.style.color = '#64748b'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden rounded-lg shadow-lg p-6 mt-2 mb-4 flex flex-col gap-4"
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left ${
                  item.cta ? '' : ''
                }`}
                style={item.cta ? {
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  fontSize: '14px'
                } : {
                  color: '#64748b',
                  fontSize: '14px',
                  background: 'transparent'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
