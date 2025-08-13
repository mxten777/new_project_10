import React from "react";

// 예시 팀 멤버 데이터 (사진 파일명과 이름/역할을 실제로 맞게 수정하세요)
const teamMembers = [
  {
    name: "홍길동",
    role: "대표/AI 총괄",
    image: "/images/image-01.jpg",
  },
  {
    name: "김철수",
    role: "RPA 개발자",
    image: "/images/image-02.jpg",
  },
  {
    name: "이영희",
    role: "공공데이터 전문가",
    image: "/images/image-03.jpg",
  },
  {
    name: "박민수",
    role: "프론트엔드 개발자",
    image: "/images/image-04.jpg",
  },
];

const ExpertTeam = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">전문가팀 소개</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-blue-200"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
