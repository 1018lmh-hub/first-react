//const  Abc = () => {

//}
// 실무에서 자주 쓰는 거
// 명칭 대문자로 시작 안하면 컴포넌트가 아니라 함수로 인식

//function Bcd(){

//}
// 리액트 권장사항(필수는 아님)

//return 할 때에는 하나밖에 못 들고 가기 때문에
// 하나로 묶어주기 위한 빈테그 사용
// 묶을 때 쓰는 태그 있긴한데 귀찮아서 잘 안씀
const WhatIsReact = () => {
  return (
    <>
      {" "}
      <h1> 리액트란 ? </h1>
      <p>
        Web UI(User Interface, 화면, View)를 구현하기 위한 JavaScript Library
      </p>
      <FirstComponent />
      <p>자바스크립트 작성 단위를 Component로 구분함</p>
      <FirstComponent />
      <p>
        Component를 조합하여 복잡한 UI를 구성할 수 있음 =&gt; SPA(Single Page
        Application)을 구현하기위한 도구로 사용됨
        <strong>화면을 예쁘게 만드는 것과 React는 전혀 연관이 없음(CSS)</strong>
      </p>
      <hr />
      <p>
        리액트를 학습하기 위해서 Node라는 JavaScript Runtime을 설치 NPM(Node
        Package Manger)라는 패키지매니저 + JSX(Babel)문법을 활용해 학습할 예정
      </p>
    </>
  );
};

function FirstComponent() {
  return <h1>나의 첫 컴포넌트</h1>;
}

export default WhatIsReact;
