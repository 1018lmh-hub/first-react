import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // 모바일 메뉴의 열림/닫힘 상태를 관리하는 State
  const [isOpen, setIsOpen] = useState(false);

  const navi = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 영역 */}
          <div className="flex-shrink-0">
            <a href="/" className="font-bold text-xl tracking-wider">
              Brand
            </a>
          </div>

          {/* 데스크톱 메뉴 영역 (화면 너비가 md 이상일 때만 표시) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                onClick={() => navi("/notices")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                공지사항
              </a>
              <a
                onClick={() => navi("/replies")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                댓글
              </a>
              <a
                onClick={() => navi("/members")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                유저
              </a>
              <a
                onClick={() => navi("/chap01")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Chap01
              </a>
              <a
                onClick={() => navi("/chap02")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Chap02
              </a>
              <a
                onClick={() => navi("/chap03")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Chap03
              </a>
              <a
                onClick={() => navi("/chap04")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Chap04
              </a>
              <a
                onClick={() => navi("/chap05")}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Chap05
              </a>
            </div>
          </div>

          {/* 모바일 햄버거 버튼 영역 (화면 너비가 md 미만일 때만 표시) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  // 닫기(X) 아이콘
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // 햄버거 아이콘
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 영역 (isOpen 상태가 true일 때만 렌더링) */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
