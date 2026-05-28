const WhatIsJsx = () => {
  return (
    <>
      <h2>JSX란 무엇인가?</h2>

      <pre>
        JSX(JavaScript XML)는 JavaScript + XML을 사용한 자바스크립트 확장문법
        <br />
        -- 초창기 <br />
        리액트 요소 만드는 법 : React.createElement('h1', null, '내 첫
        컴포넌트') JSX문법 리액트 요소 만드는 법 : <h1>내 첫 컴포넌트</h1>{" "}
        <br />
        <hr />
        JSX문법을 이용해서 JavaScript 내부에서 react의 "Element"를 생성할 수
        있음 <br />
        JavaScript모든 기능 이용할 수 있음 + UI를 만들 때에도 React랑 같이 쓰는
        것을 권장함
        <br />
        ReactElement란? <br />
        Component를 구성하는 요소 <br />
        화면에 만들어내고 싶은 요소를 작성해서 React가 브라우저에 렌더링할 수
        있게 해줌
        <br />
        특징 : 불변객체
        <hr />
        React는 index.html안에 있는 아이디 속성값이 root인 div요소 안에서 모든
        요소를 관리
        <br />
        main.jsx에서 root.render()를 호출해서 element를 전달
        <br />
        React를 이용해서 UI를 변경하는 방법은 ReactElement를 만들어서
        root.render()의 인자값으로 전달하는 방법뿐!
        <br />
      </pre>
    </>
  );
};

export default WhatIsJsx;
