import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222] py-12 text-center text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4 leading-relaxed flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
          <span>사업자등록번호 527-87-03008</span>
          <span className="hidden md:inline mx-2 text-gray-600">|</span>
          <span>대표연락처 <a href="mailto:J3KWON@futureintech.co.kr" className="hover:text-white transition-colors">J3KWON@futureintech.co.kr</a></span>
          <span className="hidden md:inline mx-2 text-gray-600">|</span>
          <span>서울특별시 양천구 남부순환로31길 45-1(우진빌딩 2층)</span>
        </div>
        <p className="text-gray-500">&copy; 2024 Future In Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;