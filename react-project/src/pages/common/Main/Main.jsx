import React from "react";

const Main = () => {
  return (
    // flex-grow를 사용하여 Navbar와 Footer 사이의 남은 세로 공간을 채웁니다.
    <main className="flex-grow bg-gray-50 flex flex-col justify-center">
      {/* 히어로(Hero) 섹션: 주요 메시지 및 CTA(Call to Action) 버튼 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">데이터 기반의</span>
          <span className="block text-indigo-600">객관적인 솔루션</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          컴포넌트 기반 아키텍처와 유틸리티 우선(Utility-first) CSS를 활용하여
          구축된 메인 콘텐츠 영역입니다. 필요한 정보를 직관적이고 빠르게
          전달합니다.
        </p>

        {/* 버튼 컨테이너 */}
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg"
            >
              시작하기
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg"
            >
              문서 보기
            </a>
          </div>
        </div>
      </section>

      {/* 특징(Features) 설명 섹션 */}
      <section className="bg-white py-16 border-t border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 카드 1 */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                논리적 구조
              </h3>
              <p className="text-gray-500 text-sm">
                독립적인 컴포넌트 단위로 분리하여 코드의 재사용성을 높이고
                유지보수를 용이하게 합니다.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                반응형 레이아웃
              </h3>
              <p className="text-gray-500 text-sm">
                CSS Grid 및 Flexbox를 활용하여 다양한 디바이스 해상도에 최적화된
                렌더링 결과를 제공합니다.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                상태 관리
              </h3>
              <p className="text-gray-500 text-sm">
                React의 훅(Hook)을 사용하여 데이터의 흐름을 예측 가능하게
                제어하고 뷰(View)를 동기화합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
