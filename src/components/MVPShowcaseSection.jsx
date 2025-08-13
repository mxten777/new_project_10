import React from 'react';
import { ExternalLink, Rocket, Globe, Code } from 'lucide-react';

const MVPShowcaseSection = () => {
  return (
    <section id="mvp-showcase" className="py-24 min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      {/* 섹션 헤더 */}
      <div className="flex flex-col items-center mb-12 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">MVP Showcase</h2>
        <p className="text-lg md:text-xl text-blue-700 font-medium max-w-3xl">실제 구현된 솔루션을 확인해보세요</p>
      </div>

      {/* MVP 소개 카드 */}
      <div className="flex justify-center w-full px-4">
        <div className="bg-white rounded-2xl p-8 md:p-10 w-full max-w-2xl">
          {/* MVP 아이콘 */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Rocket className="text-blue-500" size={32} />
            </div>
          </div>

          {/* MVP 제목 */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
              바이칼시스템즈가 만든 첫 번째 MVP
            </h3>
            <p className="text-base md:text-lg text-blue-600 font-medium">
              Firebase + Vercel + VibeCoding으로 만든 실전 랜딩페이지 예시
            </p>
          </div>

          {/* 기술 스택 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center">
              <Code className="text-blue-500 mb-2" size={20} />
              <span className="text-sm font-semibold text-blue-700">VibeCoding</span>
              <span className="text-xs text-blue-500">개발 방법론</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center">
              <Globe className="text-blue-500 mb-2" size={20} />
              <span className="text-sm font-semibold text-blue-700">Firebase</span>
              <span className="text-xs text-blue-500">백엔드 서비스</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center text-center">
              <ExternalLink className="text-blue-500 mb-2" size={20} />
              <span className="text-sm font-semibold text-blue-700">Vercel</span>
              <span className="text-xs text-blue-500">배포 플랫폼</span>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="flex justify-center">
            <a
              href="https://new-project-03-mgsevdi1l-dongyeol-jungs-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
            >
              <ExternalLink size={20} />
              MVP 사이트 보기
            </a>
          </div>

          {/* 부가 설명 */}
          <div className="text-center mt-6">
            <p className="text-sm text-blue-400">
              실제 운영 중인 랜딩페이지로 바이칼시스템즈의 기술력을 확인할 수 있습니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPShowcaseSection;
