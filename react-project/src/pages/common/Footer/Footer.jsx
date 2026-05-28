import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 푸터 콘텐츠 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜드 및 설명 영역 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 tracking-wider">
              Brand
            </h3>
            <p className="text-sm leading-relaxed">
              웹 애플리케이션의 하단을 구성하는 푸터 영역입니다. 서비스의
              목적이나 기업에 대한 간략한 설명을 제공하는 공간입니다.
            </p>
          </div>

          {/* 링크 영역 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 정보 영역 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@example.com</li>
              <li>Phone: 02-1234-5678</li>
              <li>Address: Seoul, Republic of Korea</li>
            </ul>
          </div>
        </div>

        {/* 하단 저작권 및 부가 링크 영역 */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 Brand. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
