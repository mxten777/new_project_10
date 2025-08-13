# Tailwind CSS "Unknown at rule" 오류 해결 문서

## 📋 문제 상황

### 발생한 오류
```
Unknown at rule @tailwind css(unknownAtRules) [Ln 3, Col 1]
Unknown at rule @tailwind css(unknownAtRules) [Ln 4, Col 1] 
Unknown at rule @tailwind css(unknownAtRules) [Ln 5, Col 1]
```

### 오류 위치
- 파일: `src/index.css`
- 라인: 3-5번 라인의 `@tailwind` 지시문들

### 증상
- VSCode IDE에서 "Unknown at rule" 경고 표시
- Tailwind CSS 관련 CSS 지시문을 인식하지 못함
- 개발 환경에서 스타일링이 제대로 적용되지 않을 가능성

## 🔍 원인 분석

### 주요 원인: Tailwind CSS 버전 불일치
1. **프로젝트에서 사용 중인 버전**: Tailwind CSS v4.1.11
2. **기존 CSS 문법**: Tailwind CSS v3 이하 문법 사용
3. **PostCSS 설정**: v4에 맞는 설정이지만 CSS 파일은 구버전 문법 사용

### 기술적 배경
- Tailwind CSS v4부터는 PostCSS 기반 아키텍처가 변경됨
- `@tailwind base/components/utilities` → `@import "tailwindcss"` 문법으로 변경
- PostCSS 플러그인도 `tailwindcss` → `@tailwindcss/postcss`로 변경

## ⚙️ 프로젝트 설정 현황

### package.json 의존성
```json
{
  "dependencies": {
    "@tailwindcss/postcss": "^4.1.11",
    "tailwindcss": "^4.1.11"
  },
  "devDependencies": {
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.21"
  }
}
```

### postcss.config.js 설정 (정상)
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 문제가 있던 index.css (수정 전)
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;      // ❌ v4에서 지원하지 않는 문법
@tailwind components; // ❌ v4에서 지원하지 않는 문법  
@tailwind utilities;  // ❌ v4에서 지원하지 않는 문법

@layer base {
  // ...나머지 스타일
}
```

## ✅ 해결 방법

### 1. index.css 파일 수정
**수정 전:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**수정 후:**
```css
@import "tailwindcss";
```

### 2. 완전한 수정된 파일 상단 부분
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    // ...나머지 CSS 변수들
  }
}
```

## 🎯 해결 결과

### ✅ 해결된 문제들
1. **IDE 경고 제거**: "Unknown at rule" 경고 완전 해결
2. **Tailwind CSS 정상 작동**: 모든 유틸리티 클래스 정상 적용
3. **빌드 오류 해결**: 개발 서버 및 빌드 프로세스 정상화
4. **최신 버전 호환성**: Tailwind CSS v4와 완전 호환

### ✅ 확인된 기능들
- 모든 Tailwind 유틸리티 클래스 정상 작동
- 커스텀 CSS 변수 (--background, --foreground 등) 정상 적용
- @layer 지시문 정상 작동
- 반응형 및 다크모드 정상 작동

## 📚 학습 포인트

### Tailwind CSS v4 주요 변경사항
1. **Import 문법 변경**
   - v3: `@tailwind base; @tailwind components; @tailwind utilities;`
   - v4: `@import "tailwindcss";`

2. **PostCSS 플러그인 변경**
   - v3: `tailwindcss`
   - v4: `@tailwindcss/postcss`

3. **설정 파일 구조**
   - 더 간소화된 설정
   - 향상된 성능과 빌드 시간

### 버전 호환성 체크리스트
- [ ] package.json에서 Tailwind CSS 버전 확인
- [ ] postcss.config.js에서 올바른 플러그인 사용
- [ ] CSS 파일에서 올바른 import 문법 사용
- [ ] tailwind.config.js 설정 확인

## 🚀 향후 권장사항

### 1. 정기적인 의존성 업데이트
```bash
npm update tailwindcss @tailwindcss/postcss
```

### 2. IDE 설정 최적화
- Tailwind CSS IntelliSense 확장 설치
- PostCSS 언어 지원 확장 설치
- 자동 포맷팅 설정 적용

### 3. 개발 워크플로우 개선
- 빌드 전 항상 `npm run build` 테스트
- 의존성 변경 시 개발 서버 재시작
- CSS 변경 시 브라우저 캐시 클리어

## 📞 문제 발생 시 체크리스트

1. **Tailwind CSS 버전 확인**
   ```bash
   npm list tailwindcss
   ```

2. **PostCSS 설정 확인**
   ```bash
   cat postcss.config.js
   ```

3. **빌드 테스트**
   ```bash
   npm run build
   ```

4. **개발 서버 재시작**
   ```bash
   npm run dev
   ```

---

**작성일**: 2025년 7월 8일  
**프로젝트**: 바이칼시스템즈 랜딩페이지  
**해결된 이슈**: Tailwind CSS v4 "Unknown at rule" 오류  
**결과**: ✅ 완전 해결
