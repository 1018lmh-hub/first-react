/*
    컴포넌트 내부에서 변경이 가능한 데이터 값을 관리해야하는 경우

    React에서는 화면에 표시하는 데이터, 변화해야하는 값, 상태 등등 모두 State 를 이용해서 관리
    예시) 숫자값, 문자값, 배열, 객체, 버튼을 클릭했는가? / 값이 null인가?
    모달을 열었는가? / 에러가 발생했는가? / 숫자값이 증가했는가? / 감소했는가?
    문자값이 작성되었는가? 배열에 요소가 추가되었는가? 감소했는가? 객체가 생겨났나?
    속성이 존재하는가?

    함수형 컴포넌트에서는 State를 관리하기 위해서 useState라는 Hook을 사용함

    Hook : React 16.8 버전부터 새롭게 추가된 기능
           React를 사용하면서 유용하게 사용할 수 있는 내장함수

*/

import { useState } from "react";
import UseHook from "../components/Chap04/UseHook";

const Chap04 = () => {
  //let num = 0;
  //   const arr = useState(0); // 함수임 배열을 반환, 여기선 0 대신에 쓰는거
  //   const num = arr[0];
  //   const fn = arr[1];
  const [num, setNum] = useState(0);
  // useState 훅 호출 시 배열이 반환됨 : 요소는 두개
  // [인자값으로 전달한 값이 대입되어있는 변수, 변수값을 조작할 수 있는 setter]
  // 컴포넌트 내부에서 값을 사용해야하는 경우 무조건 state라는 것을 이용해야한다.
  //useState 호출 시 반드시 인자값을 전달해야함 => 초기값
  // 문자, 숫자, 논리, 객체, 배열, undefined, NaN

  const plus = () => {
    // num++; Assignment to constant variable 이라서 안됨 고정된 값
    setNum(num + 1);
  };
  /*
    버튼을 클릭했을 때 setter를 이용해서 state를 변경하였더니 화면이 바뀜!

    컴포넌트가 재렌더링 되었기 때문에

    함수형 컴포넌트는 State(상태)가 변경될 때마다 처음부터 다시 수행됨
    React는 가상 DOM이라는 기술을 사용하여 변경된 부분만 실제 DOM에 반영
    => 이 과정을 재렌더링이라고 표현함
    마운트?

    state가 바뀌었네? => 함수컴포넌트 다시 실행! => 실제 DOM == 가상 DOM 비교!
    ==> 바뀐 부분만 다시 렌더링!! => 어? state가 바뀌었네 ~~ => 함수형 컴포넌트 다시 실행~

    React의 재렌더링 조건
    1. setter를 이용한 state의 변경
    2. props값이 변경
    3. 재렌더링된 컴포넌트의 모든 하위 컴포넌트 
  */
  return (
    <>
      <h1>누르면 늘어나는 버튼 띠영</h1>
      <br />
      <h3>{num}</h3>
      <button onClick={plus} className="bg-white hover:bg-gray-200">
        누르면 늘어나ㅏㅏㅏ암
      </button>
      <UseHook />
    </>
  );
};

export default Chap04;
